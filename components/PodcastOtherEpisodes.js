import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function PodcastOtherEpisodes() {

	return (
			<View style={styles.container}>
				<Text>
					PodcastOtherEpisodes
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 76,118,73 )',
	}
})