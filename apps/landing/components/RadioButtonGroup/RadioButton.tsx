import { type FC, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { AnimatedView, Hoverable } from '@walless/gui';
import { montserrat } from 'utils/style';

const AnimatedText = Animated.createAnimatedComponent(Text);
interface Props {
	active: boolean;
	value: string;
	onSelect: (value: string) => void;
}

export const RadioButton: FC<Props> = ({ active, onSelect, value }) => {
	const opacity = useSharedValue(active ? 1 : 0);

	const radioAnimatedStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value,
		};
	}, [opacity]);

	const borderAnimatedStyle = useAnimatedStyle(() => {
		const borderColor = interpolateColor(
			opacity.value,
			[0, 1],
			['#8f8f8a', '#ffffff'],
		);

		return {
			borderColor,
		};
	}, [opacity]);

	const textAnimatedStyle = useAnimatedStyle(() => {
		const color = interpolateColor(
			opacity.value,
			[0, 1],
			['#8f8f8a', '#ffffff'],
		);

		return {
			color,
		};
	}, [opacity]);

	const handleSelect = () => {
		onSelect(value);
	};

	useEffect(() => {
		if (active) {
			opacity.value = withSpring(1);
		} else {
			opacity.value = withSpring(0);
		}
	}, [active]);

	return (
		<Hoverable style={styles.itemContainer} onPress={handleSelect}>
			<AnimatedView style={[styles.radioButton, borderAnimatedStyle]}>
				<AnimatedView style={[styles.innerRadioButton, radioAnimatedStyle]} />
			</AnimatedView>

			<AnimatedText style={[styles.label, textAnimatedStyle]}>
				{value}
			</AnimatedText>
		</Hoverable>
	);
};

export default RadioButton;

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},

	label: {
		fontFamily: montserrat.style.fontFamily,
	},
	radioButton: {
		width: 14,
		height: 14,
		borderRadius: 100,
		borderWidth: 1,
		justifyContent: 'center',
	},
	innerRadioButton: {
		alignSelf: 'center',
		width: 8,
		height: 8,
		borderRadius: 100,
		backgroundColor: '#ffffff',
	},
});
