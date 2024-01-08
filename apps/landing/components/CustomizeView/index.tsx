import type { FC, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Image from 'next/image';
import { montserrat } from 'utils/style';

interface Props {
	children: ReactNode;
	bannerSrc: string;
	title: string;
}

export const CustomizeView: FC<Props> = ({ children, bannerSrc, title }) => {
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<View style={styles.titleContainer}>
					<Text style={[styles.title, styles.leftTitle]}>{title}</Text>
				</View>
				<View style={styles.leftContent}>{children}</View>
			</View>
			<View>
				<View style={styles.titleContainer}>
					<Text style={[styles.title, styles.rightTitle]}>Preview</Text>
				</View>
				<Image
					src={bannerSrc}
					alt="Preview"
					width={374}
					height={337}
					style={styles.preview}
				/>
			</View>
		</View>
	);
};

export default CustomizeView;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		overflow: 'hidden',
		flexDirection: 'row',
		borderColor: '#384038',
		borderWidth: 1,
	},
	leftContainer: {
		flex: 1,
	},
	titleContainer: {
		paddingVertical: 10,
		backgroundColor: '#22221a',
	},
	title: {
		fontFamily: montserrat.style.fontFamily,
		fontWeight: '900',
		fontSize: 16,
	},
	leftTitle: {
		color: '#75fb4c',
		paddingLeft: 20,
	},
	rightTitle: {
		color: '#ffffff',
		textAlign: 'center',
	},
	leftContent: {
		paddingHorizontal: 20,
	},
	preview: {
		width: 'auto',
		height: 450,
	},
});
