import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function PodcastComment() {

	return (
			<View style={styles.container}>
				<Text>
					PodcastComment
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 135,56,0 )',
	}
})