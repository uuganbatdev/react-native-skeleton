import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function NavigateFromProfileButton() {

	return (
			<View style={styles.container}>
				<Text>
					NavigateFromProfileButton
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 37,21,143 )',
	}
})