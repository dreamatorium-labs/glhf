import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const LandingPage: FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Comming soon!</Text>
		</View>
	);
};

export default LandingPage;

const styles = StyleSheet.create({
	container: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: 'white',
	},
});
