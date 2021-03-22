import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {

	return (
			<View style={styles.container}>
				<Text>
					Header
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 53,117,78 )',
	}
})