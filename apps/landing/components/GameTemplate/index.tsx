import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { Hoverable } from '@walless/gui';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { gameActions } from 'state/game';
import { buttonStyle, montserrat, russo } from 'utils/style';

export interface GameTemplateProps {
	src: string;
	alt: string;
	categories: string[];
	name: string;
}

export const GameTemplate: FC<GameTemplateProps> = ({
	src,
	alt,
	categories,
	name,
}) => {
	const router = useRouter();
	const opacity = useSharedValue(0);

	const opacityAnimatedStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value,
		};
	}, [opacity]);

	const bgColorAnimatedStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			opacity.value,
			[0, 1],
			['#17170F', '#2c322c'],
		);

		return { backgroundColor };
	}, [opacity]);

	const handlePress = () => {
		gameActions.update({
			banner: src,
			template: name,
		});
		router.push('/game-create/customize');
	};

	return (
		<Hoverable
			style={[styles.container, bgColorAnimatedStyle]}
			onHoverIn={() => (opacity.value = withTiming(1))}
			onHoverOut={() => (opacity.value = withTiming(0))}
			hoverOpacity={1}
			onPress={handlePress}
		>
			<Image src={src} alt={alt} width={355} height={283} />
			<View style={styles.detailContainer}>
				<View style={styles.categoryContainer}>
					{categories.map((category, idx) => (
						<View key={idx} style={styles.categoryItem}>
							<Text style={styles.category}>{category}</Text>
						</View>
					))}
				</View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{name}</Text>
				</View>
			</View>
			<Animated.View style={[styles.overlay, opacityAnimatedStyle]}>
				<View style={[styles.overlay, styles.overlayBg]} />
				<Hoverable
					style={[buttonStyle.button, styles.button]}
					onHoverIn={() => (opacity.value = 1)}
					onPress={handlePress}
				>
					<Text style={buttonStyle.title}>Edit</Text>
				</Hoverable>
			</Animated.View>
		</Hoverable>
	);
};

export default GameTemplate;

const styles = StyleSheet.create({
	container: {
		width: 355,
		height: 385,
		borderRadius: 10,
		overflow: 'hidden',
	},
	detailContainer: {
		padding: 15,
		gap: 15,
	},
	categoryContainer: {
		flexDirection: 'row',
		gap: 5,
	},
	categoryItem: {
		borderRadius: 300,
		paddingHorizontal: 10,
		paddingVertical: 3,
		backgroundColor: '#555555',
	},
	category: {
		fontFamily: russo.style.fontFamily,
		fontSize: 11,
		fontWeight: '300',
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		fontFamily: montserrat.style.fontFamily,
		fontSize: 22,
		fontWeight: 'bold',
		color: '#ffffff',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 385 - 283,
		justifyContent: 'center',
	},
	overlayBg: {
		opacity: 0.7,
		bottom: 0,
		backgroundColor: '#0f180f',
	},
	button: {
		alignSelf: 'center',
		paddingVertical: 10,
		paddingHorizontal: 25,
	},
});
