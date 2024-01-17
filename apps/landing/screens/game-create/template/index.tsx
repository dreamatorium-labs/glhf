'use client';

import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameTemplate from 'components/GameTemplate';
import Layout from 'components/Layout';
import ProgressIndicator from 'components/ProgressIndicator';
import { bangers, montserratMedium } from 'utils/style';

export const GameTemplatePage: FC = () => {
	return (
		<Layout style={styles.container}>
			<View style={styles.titleContainer}>
				<ProgressIndicator steps={4} currentStep={1} />
				<Text style={styles.title}>PICK A GAME TEMPLATE THAT YOU LOVE</Text>
				<Text style={styles.subTitle}>
					Explore our template galleries to choose your favorite game foundation
				</Text>
			</View>
			<View style={styles.templateContainer}>
				<GameTemplate
					src="/visual/tetris-img.png"
					alt="Tetris image"
					categories={['Casual', 'PvP']}
					name="Tetris"
				/>
				<View style={styles.skeleton}>
					<Text style={styles.skeletonText}>{`more games\ncoming soon`}</Text>
				</View>
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	container: {
		gap: 40,
	},
	titleContainer: {
		gap: 15,
	},
	title: {
		color: 'white',
		fontSize: 60,
		fontFamily: bangers.style.fontFamily,
	},
	subTitle: {
		color: 'white',
		fontSize: 16,
		fontFamily: montserratMedium.style.fontFamily,
	},
	templateContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 10,
	},
	skeleton: {
		width: 355,
		height: 385,
		backgroundColor: '#1c1c12',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	skeletonText: {
		fontFamily: montserratMedium.style.fontFamily,
		fontSize: 22,
		fontWeight: '900',
		color: '#8f8f8a',
		opacity: 0.3,
	},
});
