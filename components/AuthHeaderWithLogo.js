import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function AuthHeaderWithLogo() {

	return (
			<View style={styles.container}>
				<Text>
					AuthHeaderWithLogo
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 140,123,183 )',
	}
})