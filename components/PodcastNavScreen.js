import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LongCard from '../components/LongCard.js';
import PodcastCard from '../components/PodcastCard.js';
import TinyImagedList from '../components/TinyImagedList.js';


export default function PodcastNavScreen() {

	return (
			<View style={styles.container}>
				<Text>
					PodcastNavScreen
				</Text>
				<LongCard/>
				<PodcastCard/>
				<TinyImagedList/>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 61,60,14 )',
	}
})