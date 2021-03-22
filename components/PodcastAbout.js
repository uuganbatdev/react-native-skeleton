import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function PodcastAbout() {

	return (
			<View style={styles.container}>
				<Text>
					PodcastAbout
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 83,118,195 )',
	}
})