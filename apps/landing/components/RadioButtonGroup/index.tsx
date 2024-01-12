import type { FC } from 'react';
import { useState } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import RadioButton from './RadioButton';

interface Props {
	onSelect: (value: string) => void;
	style?: ViewStyle;
}

export const RadioButtonGroup: FC<Props> = ({ onSelect, style }) => {
	const [value, setValue] = useState('');

	const itemList = ['Easy', 'Medium', 'Hard'];

	const handleSelect = (value: string) => {
		setValue(value);
		onSelect(value);
	};

	return (
		<View style={[styles.container, style]}>
			{itemList.map((item) => (
				<RadioButton
					active={item === value}
					key={item}
					value={item}
					onSelect={(value) => handleSelect(value)}
				/>
			))}
		</View>
	);
};

export default RadioButtonGroup;

const styles = StyleSheet.create({
	container: {
		gap: 10,
	},
});
