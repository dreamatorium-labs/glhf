import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HomeScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Your game!</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minHeight: '100vh',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: 'white',
	},
});
