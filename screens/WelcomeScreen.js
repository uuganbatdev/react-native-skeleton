import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function WelcomeScreen() {

	return (
			<View style={styles.container}>
				<Text>
					WelcomeScreen
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 27,132,34 )',
	}
})