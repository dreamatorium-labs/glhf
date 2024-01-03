import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@walless/gui';
import Layout from 'components/Layout';
import { bangers, montserratLight } from 'utils/style';

export const HomePage: FC = () => {
	return (
		<Layout style={styles.container}>
			<Text style={styles.title}>CREATE YOUR FIRST GAME</Text>
			<Text style={styles.subTitle}>
				You{"'"}re on 5 minutes away to creating your own first blockchain game{' '}
			</Text>
			<View style={styles.commandContainer}>
				<Button title="Create new game +" />
			</View>
		</Layout>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	container: {},
	title: {
		color: 'white',
		fontSize: 80,
		fontFamily: bangers.style.fontFamily,
	},
	subTitle: {
		color: 'white',
		fontSize: 25,
		fontFamily: montserratLight.style.fontFamily,
		fontWeight: '300',
	},
	commandContainer: {
		alignSelf: 'flex-start',
		paddingTop: 18,
	},
});
