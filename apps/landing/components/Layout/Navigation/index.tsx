import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Link from 'next/link';
import { colors, russo } from 'utils/style';

import { SignIn } from './SignIn';

export const PageNavigation: FC = () => {
	return (
		<View style={styles.container}>
			<Link href="/">
				<Text style={styles.branding}>glhf.world</Text>
			</Link>
			<View>
				<SignIn />
			</View>
		</View>
	);
};

export default PageNavigation;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 80,
		paddingVertical: 40,
		alignItems: 'center',
	},
	branding: {
		color: colors.primary,
		fontSize: 30,
		fontFamily: russo.style.fontFamily,
	},
	commandContainer: {},
});
