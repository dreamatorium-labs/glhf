import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@walless/gui';
import Layout from 'components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { bangers, buttonStyle, montserratLight } from 'utils/style';

export const HomePage: FC = () => {
	return (
		<Layout style={styles.container}>
			<View style={{ flex: 1 }}>
				<Text style={styles.title}>CREATE YOUR FIRST GAME</Text>
				<Text style={styles.subTitle}>
					You{"'"}re on 5 minutes away to creating your own first blockchain
					game{' '}
				</Text>
				<View style={styles.commandContainer}>
					<Link href="/game-create/template">
						<Button
							title="Create new game +"
							style={buttonStyle.button}
							titleStyle={buttonStyle.title}
						/>
					</Link>
				</View>
			</View>
			<Image
				style={styles.landingImg}
				src="/visual/landing.png"
				alt="landing visual"
				layout="responsive"
				width={806}
				height={605}
			/>
		</Layout>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
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
	landingImg: {
		flex: 1,
	},
});
