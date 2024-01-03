import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PrimaryVisual: FC = () => {
	return (
		<View style={styles.container}>
			<Text>PrimaryVisual</Text>
		</View>
	);
};

export default PrimaryVisual;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
