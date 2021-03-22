let [ NEW_LINE, TAB ] = ['\n', '\t'];
module.exports.Component = class Component {
	static screenImports = '';
	imports = [];
	importStrings = '';
	componentStrings = '';
	name = '';
	isScreen;
	hasInputField;

	constructor(
		name,
		imports = [],
		isScreen = false,
		hasInputField = false
	) {
		name = name[0].toUpperCase().concat(name.slice(1,name.length));
		if (isScreen) {
			name = name.concat('Screen');
			Component.screenImports +=`import ${name} from './screens/${name}.js';${NEW_LINE}`;
		};
		if (hasInputField != undefined) {
			this.hasInputField = hasInputField;
		}
		this.name = name;
		this.isScreen = isScreen;
		this.imports = imports;
	}

	fillTemplateAndReturn = () => {
		if (this.imports[0]) {
			this.imports.map(importName => {
				importName = importName[0].toUpperCase().concat(importName.slice(1,importName.length));
				this.importStrings += `import ${importName} from '../components/${importName}.js';${NEW_LINE}`
				this.componentStrings += `${TAB}${TAB}${TAB}${TAB}<${importName}/>${NEW_LINE}`
			} 
			)
		}

		return (
`import React, { useState, useEffect } from 'react';
import { StyleSheet, ${hasInputField ? 'PlatForm, KeyboardAvoidingView, ': ''}Text, View } from 'react-native';
${this.importStrings}

export default function ${this.name}() {

	return (
			<${ hasInputField ?'KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}' : 'View'} style={styles.container}>
				<Text>
					${this.name}
				</Text>
${this.componentStrings}
			</${ hasInputField ?'KeyboardAvoidingView' : 'View'}>
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
