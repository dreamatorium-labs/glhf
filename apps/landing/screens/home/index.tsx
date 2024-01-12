import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@walless/gui';
import Layout from 'components/Layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { bangers, buttonStyle, montserratLight } from 'utils/style';

export const HomePage: FC = () => {
	const router = useRouter();

	const handleCreatePress = () => {
		router.push('/game-create/template');
	};

	return (
		<Layout style={styles.container}>
			<View style={{ flex: 1 }}>
				<Text style={styles.title}>CREATE YOUR FIRST GAME</Text>
				<Text style={styles.subTitle}>
					You{"'"}re on 5 minutes away to creating your own first blockchain
					game{' '}
				</Text>
				<View style={styles.commandContainer}>
					<Button
						title="Create new game +"
						style={buttonStyle.button}
						titleStyle={buttonStyle.title}
						onPress={handleCreatePress}
					/>
				</View>
			</View>
			<Image
				style={styles.landingImg}
				src="/visual/landing.png"
				alt="landing visual"
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
		fontWeight: montserratLight.style.fontWeight as never,
	},
	commandContainer: {
		alignSelf: 'flex-start',
		paddingTop: 18,
	},
	landingImg: {
		flex: 1,
		width: '100%',
	},
});
