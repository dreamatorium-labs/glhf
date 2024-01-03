import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Link from 'next/link';
import { navigationHeight } from 'utils/config';
import { colors, russo } from 'utils/style';

export const PageNavigation: FC = () => {
	return (
		<View style={styles.container}>
			<Link href="/">
				<Text style={styles.branding}>glhf.world</Text>
			</Link>
			<View>
				<Text style={{ color: 'white' }}>Account</Text>
			</View>
		</View>
	);
};

export default PageNavigation;

const styles = StyleSheet.create({
	container: {
		position: 'fixed' as never,
		top: 0,
		left: 0,
		right: 0,
		height: navigationHeight,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 18,
		alignItems: 'center',
	},
	branding: {
		color: colors.primary,
		fontSize: 30,
		fontFamily: russo.style.fontFamily,
	},
	commandContainer: {},
});
