import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function BookCard() {

	return (
			<View style={styles.container}>
				<Text>
					BookCard
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 187,186,182 )',
	}
})