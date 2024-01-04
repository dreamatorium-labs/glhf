import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
	active: boolean;
}

export const Indicator: FC<Props> = ({ active }) => {
	return <View style={[styles.container, active && styles.active]} />;
};

export default Indicator;

const styles = StyleSheet.create({
	container: {
		width: 50,
		height: 5,
		backgroundColor: '#53534c',
		borderRadius: 500,
	},
	active: {
		backgroundColor: '#babab7',
	},
});
