import type { FC } from 'react';
import { useState } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Hoverable } from '@walless/gui';
import { montserrat } from 'utils/style';

import RadioButton from './RadioButton';

interface Props {
	onSelect: (value: string) => void;
	style?: ViewStyle;
}

export const RadioButtonGroup: FC<Props> = ({ onSelect, style }) => {
	const [value, setValue] = useState('');

	const handleSelect = (value: string) => {
		setValue(value);
		onSelect(value);
	};

	return (
		<View style={[styles.container, style]}>
			<Hoverable
				style={styles.itemContainer}
				onPress={() => handleSelect('Easy')}
			>
				<RadioButton active={value === 'Easy'} />
				<Text style={styles.label}>Easy</Text>
			</Hoverable>
			<Hoverable
				style={styles.itemContainer}
				onPress={() => handleSelect('Medium')}
			>
				<RadioButton active={value === 'Medium'} />
				<Text style={styles.label}>Medium</Text>
			</Hoverable>
			<Hoverable
				style={styles.itemContainer}
				onPress={() => handleSelect('Hard')}
			>
				<RadioButton active={value === 'Hard'} />
				<Text style={styles.label}>Hard</Text>
			</Hoverable>
		</View>
	);
};

export default RadioButtonGroup;

const styles = StyleSheet.create({
	container: {
		gap: 10,
	},
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},

	label: {
		fontFamily: montserrat.style.fontFamily,
		color: '#8f8f8a',
	},
});
