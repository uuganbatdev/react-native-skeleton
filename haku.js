let fs = require('fs');
let [ NEW_LINE, TAB ] = ['\n', '\t'];

let inputJson = fs.readFileSync('haku.json');
let structure = JSON.parse(inputJson);

class Component {
	imports = [];
	importStrings = '';
	componentStrings = '';
	name = '';
	isScreen;
	constructor(name, imports, isScreen) {
		name = name[0].toUpperCase().concat(name.slice(1,name.length));
		if (isScreen) { name = name.concat('Screen') };
		this.isScreen = isScreen;
		this.name = name;
		this.imports = imports;
	}

	fillTemplateAndReturn = () => {
		if (this.imports[0]) {
			this.imports.map(importName => {

				this.importStrings += `import ${importName} from 'components/${importName}';${NEW_LINE}`
				this.componentStrings += `${TAB}${TAB}${TAB}${TAB}<${importName}/>${NEW_LINE}`
			} 
			)
		}

		return (
`import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
${this.importStrings}

export default function ${this.name}() {

	return (
			<View style={styles.container}>
				<Text>
					${this.name}
				</Text>
${this.componentStrings}
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)} )',
	}
})`
		)
	}
}


let components = 'components';
let screens = 'screens';

fs.mkdirSync(components);
fs.mkdirSync(screens);

let giveFileName = (folderName, fileName, isScreen) => {
	let addScreenStr = '';
	let modifiedFileName = fileName[0].toUpperCase().concat(fileName.slice(1, fileName.length));
	if (isScreen) {
		addScreenStr = 'Screen';
	}
	return `${folderName}/${modifiedFileName}${addScreenStr}.js`;
}

structure.screens.map(file => {
	fs.appendFileSync(giveFileName(screens, file.name, true), new Component(file.name, file.imports, true).fillTemplateAndReturn());
});

structure.components.map(file => {
	fs.appendFileSync(giveFileName(components, file.name, false), new Component(file.name, file.imports, false).fillTemplateAndReturn());
});

