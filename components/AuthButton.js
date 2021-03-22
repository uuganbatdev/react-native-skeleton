import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function AuthButton() {

	return (
			<View style={styles.container}>
				<Text>
					AuthButton
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 190,13,173 )',
	}
})