let fs = require('fs');
let [ NEW_LINE, TAB ] = ['\n', '\t'];

let inputJson = fs.readFileSync('haku.json');
let structure = JSON.parse(inputJson);
let { Component } = require('./Component');

let components = 'components';
let componentsSet = new Set();
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
	file.imports.map(compname => {
		componentsSet.add(compname);
	})

	fs.appendFileSync(
		giveFileName(
			fodlerName = screens,
			fileName = file.name, 
			isScreen = true
		),
		new Component(
			name = file.name,
			imports = file.imports,
			isScreen = true,
			hasInputField = file.hasInputField
		).fillTemplateAndReturn()
	);
});


componentsSet.forEach((file) => {
	fs.appendFileSync(
		giveFileName(
			fodlerName = components,
			fileName = file, 
			isScreen = false
		),
		new Component(
			name = file,
		).fillTemplateAndReturn()
	);
})

structure.components.map(file => {
	fs.writeFileSync(
		giveFileName(
			folderName = components,
			fileName = file.name, 
			isScreen = false
		),
		new Component(
			name = file.name,
			imports = file.imports,
		).fillTemplateAndReturn()
	);
});

let appFileTemplate = 
`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
${Component.screenImports}

import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
		<NavigationContainer>
		  <Text style={styles.text}>Appjs</Text>
		</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
	paddingTop: Constants.statusBarHeight
  },
  
  text: {
	color: 'black'
  },
  
});`

fs.appendFileSync('App.js', appFileTemplate);

