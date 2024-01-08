import { StyleSheet, Text, View } from 'react-native';
import { Input } from '@walless/gui';
import { gameActions, gameState } from 'state/game';
import { montserrat } from 'utils/style';
import { useSnapshot } from 'valtio';

export const NameForm = () => {
	const { gameName, domainName } = useSnapshot(gameState);
	const handleGameNameChange = (gameName: string) => {
		gameActions.update({ gameName });
	};
	const handleDomainChange = (domainName: string) => {
		gameActions.update({ domainName });
	};

	return (
		<View style={styles.container}>
			<View style={styles.fieldContainer}>
				<Text style={styles.field}>Choose your domain name</Text>
				<Input
					style={styles.subfield}
					inputStyle={styles.subFieldInput}
					suffix={<Text style={styles.subFieldInput}>.glhf.world</Text>}
					placeholder="thegreateescape"
					value={domainName}
					onChangeText={handleDomainChange}
				/>
			</View>
			<View style={styles.fieldContainer}>
				<Text style={styles.field}>Name your game</Text>
				<Input
					style={styles.subfield}
					inputStyle={styles.subFieldInput}
					placeholder="eg. The Great Escape"
					value={gameName}
					onChangeText={handleGameNameChange}
				/>
			</View>
		</View>
	);
};

export default NameForm;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		gap: 30,
	},
	fieldContainer: {
		gap: 10,
	},
	field: {
		fontFamily: montserrat.style.fontFamily,
		fontWeight: 'bold',
		color: '#ffffff',
		fontSize: 15,
	},
	subfield: {
		width: 350,
		borderRadius: 100,
		paddingRight: 20,
	},
	subFieldInput: {
		paddingVertical: 15,
		fontFamily: montserrat.style.fontFamily,
		color: '#ffffff',
	},
});
