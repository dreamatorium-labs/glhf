import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { navigationHeight } from 'utils/config';

import Navigation from './Navigation';

interface Props {
	style?: StyleProp<ViewStyle>;
	children: ReactNode;
}

export const AppLayout: FC<Props> = ({ style, children }) => {
	return (
		<Fragment>
			<View style={[styles.container, style]}>{children}</View>
			<Navigation />
		</Fragment>
	);
};

export default AppLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: navigationHeight,
		paddingHorizontal: 18,
	},
});
