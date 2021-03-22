import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function TutorialScreen() {

	return (
			<View style={styles.container}>
				<Text>
					TutorialScreen
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 203,149,18 )',
	}
})