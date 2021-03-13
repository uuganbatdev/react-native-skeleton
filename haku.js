let fs = require('fs');
let [ NEW_LINE, TAB ] = ['\n', '\t'];

let inputJson = fs.readFileSync('haku.json');
let structure = JSON.parse(inputJson);

class Component {
	imports = [];
	importStrings = '';
	componentStrings = '';
	name = '';

	constructor(name, imports) {
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


let folderName = 'components';
fs.mkdir(folderName, () => {
	structure.components.map(file => {
		fs.appendFileSync(`${folderName}/${file.name}.js`, new Component(file.name, file.imports).fillTemplateAndReturn());
	});
})

