import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@walless/gui';
import CustomizeView from 'components/CustomizeView';
import Layout from 'components/Layout';
import ProgressIndicator from 'components/ProgressIndicator';
import { useRouter } from 'next/router';
import { bangers, buttonStyle, montserrat } from 'utils/style';

import CustomizeForm from './CustomizeForm';

export const GameCustomizePage = () => {
	const router = useRouter();

	const handleContinue = () => {
		router.push('/game-create/customize');
	};

	useEffect(() => {}, []);

	return (
		<Layout style={styles.container}>
			<View style={styles.titleContainer}>
				<ProgressIndicator steps={4} currentStep={2} />
				<View style={styles.headContainer}>
					<Text style={styles.title}>CUSTOMIZE YOUR GAME</Text>
					<Button
						title="Continue"
						style={[buttonStyle.button, styles.continueBtn]}
						titleStyle={buttonStyle.title}
						onPress={handleContinue}
					/>
				</View>
				<Text style={styles.subTitle}>
					{`Personalize characters, environments, and features to match your unique vision.\nExplore customization options to make your game stand out.`}
				</Text>
			</View>
			<CustomizeView bannerSrc="/visual/tetris-preview.png">
				<CustomizeForm />
			</CustomizeView>
		</Layout>
	);
};

export default GameCustomizePage;

const styles = StyleSheet.create({
	container: {
		gap: 40,
	},
	headContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
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
		fontFamily: montserrat.style.fontFamily,
		fontWeight: '400',
		lineHeight: 25,
	},
	continueBtn: {
		paddingVertical: 10,
	},
});
