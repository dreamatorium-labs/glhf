import { type FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { AnimatedView } from '@walless/gui';

interface Props {
	active: boolean;
}

export const RadioButton: FC<Props> = ({ active }) => {
	const opacity = useSharedValue(active ? 1 : 0);

	const radioAnimatedStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value,
		};
	}, [opacity]);

	useEffect(() => {
		if (active) {
			opacity.value = withSpring(1);
		} else {
			opacity.value = withSpring(0);
		}
	}, [active]);

	return (
		<View style={styles.radioButton}>
			<AnimatedView style={[styles.innerRadioButton, radioAnimatedStyle]} />
		</View>
	);
};

export default RadioButton;

const styles = StyleSheet.create({
	radioButton: {
		width: 14,
		height: 14,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: '#ffffff',
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
