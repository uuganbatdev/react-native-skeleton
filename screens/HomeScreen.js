import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PodcastNavScreen from '../components/PodcastNavScreen.js';
import Header from '../components/Header.js';
import LibraryNavScreen from '../components/LibraryNavScreen.js';
import LiveNavScreen from '../components/LiveNavScreen.js';


export default function HomeScreen() {

	return (
			<View style={styles.container}>
				<Text>
					HomeScreen
				</Text>
				<PodcastNavScreen/>
				<Header/>
				<LibraryNavScreen/>
				<LiveNavScreen/>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 3,143,126 )',
	}
})