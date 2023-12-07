//@ts-nocheck

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import { SafeAreaView } from 'react-native';
import BottomSheet, { useBottomSheetSpringConfigs } from '@gorhom/bottom-sheet';

const AppWrapper = ({ children, setBottomSheet }) => {
	const bottomSheetRef = useRef(null);

	const snapPoints = useMemo(() => ['5%', '10%', '25%', '35%', '50%', '70%', '90%', '100%'], []);

	const handleSheetChanges = useCallback((index) => {
		console.log('handleSheetChanges', index);
	}, []);

	// const [bottomSheet, setBottomSheet] = useState(false);

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
		<SafeAreaView style={{ flex: 1 }}>
			<View style={[styles.appWrapper]}>
				<Header setBottomSheet={setBottomSheet} handleOpenPress={handleOpenPress} />
				{children}

				{/* <Button title="Open" onPress={handleOpenPress} /> */}

				{/* {
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
				} */}
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	appWrapper: {
		flex: 1,
		paddingHorizontal: 16,
		// backgroundColor: 'red'
		// backgroundColor: 'white'
	}
})

export default AppWrapper;