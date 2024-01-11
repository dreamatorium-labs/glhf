import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@walless/gui';
import CustomizeView from 'components/CustomizeView';
import Layout from 'components/Layout';
import ProgressIndicator from 'components/ProgressIndicator';
import { useRouter } from 'next/router';
import { bangers, buttonStyle, montserrat } from 'utils/style';

import PreviewForm from './PreviewForm';

export const PreviewPublishPage = () => {
	const router = useRouter();

	const handleContinue = () => {
		router.push('/result');
	};

	return (
		<Layout style={styles.container}>
			<View style={styles.titleContainer}>
				<ProgressIndicator steps={4} currentStep={4} />
				<View style={styles.headContainer}>
					<Text style={styles.title}>PREVIEW & PUBLISH</Text>
					<Button
						title="Publish"
						style={[buttonStyle.button, styles.continueBtn]}
						titleStyle={buttonStyle.title}
						onPress={handleContinue}
					/>
				</View>
				<Text style={styles.subTitle}>
					{`Get a snieak peek of your game before the world sees it.\nPreview and polish every detail before hitting publish.`}
				</Text>
			</View>
			<CustomizeView
				bannerSrc="/visual/tetris-preview.png"
				title="Preview & Publish"
			>
				<PreviewForm />
			</CustomizeView>
		</Layout>
	);
};

export default PreviewPublishPage;

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
