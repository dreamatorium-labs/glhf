'use client';

import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { gameActions, gameState } from 'state/game';
import { montserrat } from 'utils/style';
import { useSnapshot } from 'valtio';

import { sharedStyle } from './shared';

export const GameRules = () => {
	const { initialSpeed: initialValue } = useSnapshot(gameState);
	const [initialSpeed, setInitialSpeed] = useState(initialValue);
	const handleCompleteSliding = (value: number) => {
		gameActions.update({ initialSpeed: value });
	};

	return (
		<View style={sharedStyle.fieldContainer}>
			<Text style={sharedStyle.field}>Game rules</Text>
			<View style={sharedStyle.subFieldContainer}>
				<Text style={sharedStyle.subField}>Initial speed</Text>
				<View style={styles.sliderContainer}>
					<Slider
						style={styles.slider}
						minimumValue={1}
						maximumValue={100}
						minimumTrackTintColor="#ffffff"
						maximumTrackTintColor="#8f8f8a"
						thumbTintColor="#ffffff"
						step={1}
						value={initialSpeed}
						onValueChange={setInitialSpeed}
						onSlidingComplete={handleCompleteSliding}
					/>
					<Text style={styles.sliderValue}>{initialSpeed}</Text>
				</View>
			</View>
		</View>
	);
};

export default GameRules;

const styles = StyleSheet.create({
	sliderContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: 300,
	},
	slider: {
		flexGrow: 0,
		width: 250,
	},
	sliderValue: {
		fontFamily: montserrat.style.fontFamily,
		color: '#ffffff',
	},
});
