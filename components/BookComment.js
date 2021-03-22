import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function BookComment() {

	return (
			<View style={styles.container}>
				<Text>
					BookComment
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 136,191,250 )',
	}
})