import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function AuthInput() {

	return (
			<View style={styles.container}>
				<Text>
					AuthInput
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 219,172,131 )',
	}
})