import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function LiveNavScreen() {

	return (
			<View style={styles.container}>
				<Text>
					LiveNavScreen
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 233,191,185 )',
	}
})