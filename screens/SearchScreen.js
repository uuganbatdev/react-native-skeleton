import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function SearchScreen() {

	return (
			<View style={styles.container}>
				<Text>
					SearchScreen
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 32,251,131 )',
	}
})