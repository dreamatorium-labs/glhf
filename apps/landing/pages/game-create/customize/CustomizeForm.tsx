'use client';

import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import GameRules from './GameRules';

export const CustomizeForm: FC = () => {
	return (
		<View style={styles.container}>
			<GameRules />
		</View>
	);
};

export default CustomizeForm;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 15,
		gap: 20,
	},
});
