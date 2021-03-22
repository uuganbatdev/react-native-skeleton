import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function PodcastCard() {

	return (
			<View style={styles.container}>
				<Text>
					PodcastCard
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 119,80,122 )',
	}
})