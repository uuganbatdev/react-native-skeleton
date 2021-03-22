import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookCard from '../components/BookCard.js';
import Header from '../components/Header.js';
import BookComment from '../components/BookComment.js';


export default function SingleBookScreen() {

	return (
			<View style={styles.container}>
				<Text>
					SingleBookScreen
				</Text>
				<BookCard/>
				<Header/>
				<BookComment/>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 147,252,129 )',
	}
})