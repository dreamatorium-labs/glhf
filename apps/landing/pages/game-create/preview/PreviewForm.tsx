import { StyleSheet, Text, View } from 'react-native';
import { gameState } from 'state/game';
import { montserrat, montserratLight } from 'utils/style';
import { useSnapshot } from 'valtio';

export const PreviewForm = () => {
	const {
		gameName,
		domainName,
		initialSpeed,
		difficulty,
		fees,
		players,
		tokenAddress,
		rewards,
	} = useSnapshot(gameState);

	return (
		<View style={styles.container}>
			<View style={styles.fieldContainer}>
				<Text style={styles.fieldTitle}>Game Information</Text>
				<View style={styles.innerContainer}>
					<View style={styles.subfieldContainer}>
						<Text style={styles.subfieldTitle}>Name</Text>
						<Text style={styles.subfieldContent}>{gameName}</Text>
					</View>
				</View>
				<View style={styles.innerContainer}>
					<View style={styles.subfieldContainer}>
						<Text style={styles.subfieldTitle}>Domain name</Text>
						<Text
							style={styles.subfieldContent}
						>{`${domainName}.glhf.world`}</Text>
					</View>
				</View>
			</View>

			<View style={styles.fieldContainer}>
				<Text style={styles.fieldTitle}>Game rules</Text>
				<View style={styles.innerContainer}>
					<View style={styles.subfieldContainer}>
						<Text style={styles.subfieldTitle}>Initial speed</Text>
						<Text style={styles.subfieldContent}>{initialSpeed}</Text>
					</View>
				</View>
				<View style={styles.innerContainer}>
					<View style={styles.subfieldContainer}>
						<Text style={styles.subfieldTitle}>Difficulty</Text>
						<Text style={styles.subfieldContent}>{difficulty}</Text>
					</View>
				</View>
			</View>

			<View style={styles.fieldContainer}>
				<Text style={styles.fieldTitle}>Tokenomic & Economy</Text>
				<View style={styles.innerContainer}>
					<View style={styles.subfieldContainer}>
						<Text style={styles.subfieldTitle}>Fees</Text>
						<Text style={styles.subfieldContent}>{`${fees}%`}</Text>
					</View>
					<View style={styles.subfieldContainer}>
						<Text style={styles.subfieldTitle}>No. of players</Text>
						<Text style={styles.subfieldContent}>{players}</Text>
					</View>
					<View style={styles.subfieldContainer}>
						<Text style={styles.subfieldTitle}>Token address</Text>
						<Text style={styles.subfieldContent}>{tokenAddress}</Text>
					</View>
					<View style={styles.subfieldContainer}>
						<Text style={styles.subfieldTitle}>Rewards</Text>
						<Text
							style={styles.subfieldContent}
						>{`Top 1: ${rewards.top1}%`}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default PreviewForm;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		gap: 30,
	},
	fieldContainer: {
		gap: 10,
	},
	fieldTitle: {
		fontFamily: montserrat.style.fontFamily,
		fontSize: 16,
		fontWeight: '900',
		color: '#ffffff',
		opacity: 0.6,
	},
	innerContainer: {
		gap: 10,
	},
	subfieldContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	subfieldTitle: {
		width: 150,
		fontFamily: montserratLight.style.fontFamily,
		fontSize: 16,
		fontWeight: '400',
		color: '#ffffff',
		opacity: 0.6,
	},
	subfieldContent: {
		fontFamily: montserrat.style.fontFamily,
		fontSize: 16,
		fontWeight: '900',
		color: '#ffffff',
	},
});
