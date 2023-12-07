// @ts-nocheck
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, Touchable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ handleOpenPress, setBottomSheet }) => {
	return (
		<SafeAreaView>
			<StatusBar style='auto' />
			<View style={[styles.headerWrapper]}>
				<TouchableOpacity onPress={
					() => {
						setBottomSheet(true);
						handleOpenPress;
					}
				}>
					<Text style={[styles.headerText]}>Header Left</Text>
				</TouchableOpacity>
				<Text style={[styles.headerText]}>Header Right</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	headerWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'gray',
		paddingHorizontal: 16,
		alignItems: 'center',
		minHeight: 30,
		marginTop: Platform.OS !== 'ios' ? 25 : 0,
	},

	headerText: {
		fontWeight: '500',
		color: 'orange'
	}
})

export default Header;

