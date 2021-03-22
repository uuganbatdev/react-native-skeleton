import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PodcastOtherEpisodes from '../components/PodcastOtherEpisodes.js';
import Header from '../components/Header.js';
import PodcastAbout from '../components/PodcastAbout.js';
import PodcastComment from '../components/PodcastComment.js';


export default function SinglePodcastScreen() {

	return (
			<View style={styles.container}>
				<Text>
					SinglePodcastScreen
				</Text>
				<PodcastOtherEpisodes/>
				<Header/>
				<PodcastAbout/>
				<PodcastComment/>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 211,39,58 )',
	}
})