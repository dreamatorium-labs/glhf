import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import Navigation from './Navigation';

interface Props {
	style?: StyleProp<ViewStyle>;
	children: ReactNode;
}

export const AppLayout: FC<Props> = ({ style, children }) => {
	return (
		<Fragment>
			<Navigation />
			<View style={[styles.container, style]}>{children}</View>
		</Fragment>
	);
};

export default AppLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 80,
	},
});
