import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LongCard from '../components/LongCard.js';
import BookCard from '../components/BookCard.js';


export default function LibraryNavScreen() {

	return (
			<View style={styles.container}>
				<Text>
					LibraryNavScreen
				</Text>
				<LongCard/>
				<BookCard/>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 117,245,169 )',
	}
})