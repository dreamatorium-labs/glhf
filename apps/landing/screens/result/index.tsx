import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Hoverable, Input } from '@walless/gui';
import Layout from 'components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { gameState } from 'state/game';
import { bangers, buttonStyle, colors, montserrat } from 'utils/style';
import { useSnapshot } from 'valtio';

export const ResultPage: FC = () => {
	const { gameName, domainName } = useSnapshot(gameState);
	const gameUrl = `https://${domainName}.glhf.world`;

	const handleCopyPress = () => {
		navigator.clipboard.writeText(gameUrl);
	};

	const suffix = (
		<View style={styles.suffixContainer}>
			<Hoverable onPress={handleCopyPress}>
				<Image
					src="/visual/copy-ic.svg"
					alt="copy icon"
					width={26}
					height={30}
				/>
			</Hoverable>
			<Link target="_blank" href={gameUrl}>
				<Button
					title="Play now"
					style={[buttonStyle.button, styles.playBtn]}
					titleStyle={buttonStyle.title}
				/>
			</Link>
		</View>
	);

	return (
		<Layout>
			<View style={styles.container}>
				<Text style={styles.headline}>YOU&rsquo;RE DOPE!</Text>
				<Text style={[styles.text, { textAlign: 'center' }]}>
					Congratulations! Your <Text style={styles.highlight}>{gameName}</Text>{' '}
					is live and ready to play. Let&rsquo;s proudly spread to the world
					know and play with your friends now!
				</Text>
				<Image
					src="/visual/tetris-preview.png"
					alt="tetris preview"
					width={374}
					height={337}
					style={styles.previewImg}
				/>
				<Input
					style={styles.inputContainer}
					inputStyle={[styles.text, { width: 300 }]}
					value={gameUrl}
					suffix={suffix}
				/>
			</View>
		</Layout>
	);
};

export default ResultPage;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingVertical: 40,
		maxWidth: 700,
		marginHorizontal: 'auto',
		gap: 20,
	},
	headline: {
		fontFamily: bangers.style.fontFamily,
		fontSize: 80,
		color: '#ffffff',
	},
	text: {
		fontFamily: montserrat.style.fontFamily,
		fontSize: 18,
		color: '#ffffff',
	},
	highlight: {
		color: colors.primary,
	},
	previewImg: {
		width: 300,
		height: 'auto',
	},
	inputContainer: {
		backgroundColor: '#202015',
		borderRadius: 100,
		borderColor: '#2a342a',
	},
	suffixContainer: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
		marginRight: 10,
	},
	playBtn: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
