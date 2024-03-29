import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@walless/gui';
import CustomizeView from 'components/CustomizeView';
import Layout from 'components/Layout';
import ProgressIndicator from 'components/ProgressIndicator';
import { useRouter } from 'next/router';
import { bangers, buttonStyle, montserratMedium } from 'utils/style';

import NameForm from './NameForm';

export const NameGamePage = () => {
	const router = useRouter();

	const handleContinue = () => {
		router.push('/game-create/preview');
	};

	return (
		<Layout style={styles.container}>
			<View style={styles.titleContainer}>
				<ProgressIndicator steps={4} currentStep={3} />
				<View style={styles.headContainer}>
					<Text style={styles.title}>NAME YOUR GAME</Text>
					<Button
						title="Continue"
						style={[buttonStyle.button, styles.continueBtn]}
						titleStyle={buttonStyle.title}
						onPress={handleContinue}
					/>
				</View>
				<Text style={styles.subTitle}>
					{`Create a unique identity for your game by choosing a name and securing a custom domain.\nElevate your brand, increase visibility, and explore naming and domain options now.`}
				</Text>
			</View>
			<CustomizeView
				bannerSrc="/visual/tetris-preview.png"
				title="Name your game"
			>
				<NameForm />
			</CustomizeView>
		</Layout>
	);
};

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
		fontFamily: montserratMedium.style.fontFamily,
		fontWeight: '400',
		lineHeight: 25,
	},
	continueBtn: {
		paddingVertical: 10,
	},
});
