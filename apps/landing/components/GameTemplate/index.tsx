import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Hoverable } from '@walless/gui';
import Image from 'next/image';
import { montserrat, russo } from 'utils/style';

export interface GameTemplateProps {
	src: string;
	alt: string;
	categories: string[];
	name: string;
}

export const GameTemplate: FC<GameTemplateProps> = ({
	src,
	alt,
	categories,
	name,
}) => {
	return (
		<Hoverable style={styles.container}>
			<Image src={src} alt={alt} width={355} height={283} />
			<View style={styles.detailContainer}>
				<View style={styles.categoryContainer}>
					{categories.map((category, idx) => (
						<View key={idx} style={styles.categoryItem}>
							<Text style={styles.category}>{category}</Text>
						</View>
					))}
				</View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{name}</Text>
				</View>
			</View>
		</Hoverable>
	);
};

export default GameTemplate;

const styles = StyleSheet.create({
	container: {
		width: 355,
		height: 385,
		borderRadius: 10,
		overflow: 'hidden',
		backgroundColor: '#17170F',
	},
	detailContainer: {
		padding: 15,
		gap: 15,
	},
	categoryContainer: {
		flexDirection: 'row',
		gap: 5,
	},
	categoryItem: {
		borderRadius: 300,
		paddingHorizontal: 10,
		paddingVertical: 3,
		backgroundColor: '#555555',
	},
	category: {
		fontFamily: russo.style.fontFamily,
		fontSize: 11,
		fontWeight: '300',
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		fontFamily: montserrat.style.fontFamily,
		fontSize: 22,
		fontWeight: 'bold',
		color: '#ffffff',
	},
});
