// @ts-nocheck
import React, { Children, useCallback, useMemo, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Components/Header';
import AppWrapper from '../Components/AppWrapper';
import BottomSheet, { useBottomSheetSpringConfigs } from '@gorhom/bottom-sheet';
import { Button } from 'react-native';


const Home = () => {

	const bottomSheetRef = useRef(null);

	const snapPoints = useMemo(() => ['5%', '10%', '25%', '35%', '50%', '70%', '90%', '100%'], []);

	const handleSheetChanges = useCallback((index) => {
		console.log('handleSheetChanges', index);
	}, []);

	const [bottomSheet, setBottomSheet] = useState(false);

	const handleClosePress = () => {
		bottomSheetRef.current.close();
		// setBottomSheet(false);
	};

	const handleOpenPress = () => {
		bottomSheetRef.current.expand();
	};

	const animationConfigs = useBottomSheetSpringConfigs({
		damping: 80,
		overshootClamping: true,
		restDisplacementThreshold: 0.1,
		restSpeedThreshold: 0.1,
		stiffness: 500,
	});

	return (
		<AppWrapper setBottomSheet={setBottomSheet}>
			<View style={styles.container}>
				<View style={[styles.homeContents]}>
					<Text>Home Contents</Text>

					{
						bottomSheet &&
						<BottomSheet
							ref={bottomSheetRef}
							index={5}
							snapPoints={snapPoints}
							// onChange={handleSheetChanges}
							onClose={() => setBottomSheet(!bottomSheet)}
							enablePanDownToClose={true}
							animationConfigs={animationConfigs}
						>
							<View style={styles.contentContainer}>
								<Text>Awesome 🎉</Text>
							</View>
							<Button title="close" onPress={handleClosePress} />
						</BottomSheet>
					}
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
