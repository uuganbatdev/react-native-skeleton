import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PodcastCard from '../components/PodcastCard.js';
import Header from '../components/Header.js';
import BookCard from '../components/BookCard.js';


export default function MyLibraryScreen() {

	return (
			<View style={styles.container}>
				<Text>
					MyLibraryScreen
				</Text>
				<PodcastCard/>
				<Header/>
				<BookCard/>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 237,211,190 )',
	}
})