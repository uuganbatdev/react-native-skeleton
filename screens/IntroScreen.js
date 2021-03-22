import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthHeaderWithLogo from '../components/AuthHeaderWithLogo.js';


export default function IntroScreen() {

	return (
			<View style={styles.container}>
				<Text>
					IntroScreen
				</Text>
				<AuthHeaderWithLogo/>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 190,221,225 )',
	}
})