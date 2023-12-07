// @ts-nocheck
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Components/Header';
import AppWrapper from '../Components/AppWrapper';

const Home = () => {
	return (
		<AppWrapper>
			<View style={styles.container}>
				<View style={[styles.homeContents]}>
					<Text>Home Contents</Text>
				</View>
			</View>
		</AppWrapper>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},

	homeContents: {
		flex: 1,
		backgroundColor: '#029440',
		padding: 20
	}
});

export default Home;
