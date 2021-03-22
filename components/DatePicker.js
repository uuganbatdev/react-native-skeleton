import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function DatePicker() {

	return (
			<View style={styles.container}>
				<Text>
					DatePicker
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 43,37,214 )',
	}
})