import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from '@walless/gui';
import { gameActions, gameState } from 'state/game';
import { montserratLight } from 'utils/style';
import { useSnapshot } from 'valtio';

import { sharedStyle } from './shared';

export const TokenomicEconomy: FC = () => {
	const { fees, players, tokenAddress, rewards } = useSnapshot(gameState);
	const handleChangeFees = (value: string) => {
		const fees = parseFloat(value) || 0;
		gameActions.update({ fees });
	};

	const handleChangeTokenAddress = (tokenAddress: string) => {
		gameActions.update({ tokenAddress });
	};

	return (
		<View style={sharedStyle.fieldContainer}>
			<Text style={sharedStyle.field}>Tokenomic & Economy</Text>
			<View style={sharedStyle.subFieldContainer}>
				<Text style={sharedStyle.subField}>Fees</Text>
				<Input
					style={[sharedStyle.subFieldInputContainer, styles.shortInput]}
					inputStyle={[sharedStyle.subFieldInput, { minWidth: 0 }]}
					suffix={
						<Text style={[sharedStyle.subFieldInput, { paddingRight: 20 }]}>
							%
						</Text>
					}
					onChangeText={handleChangeFees}
					value={fees.toString()}
				/>
			</View>
			<View style={sharedStyle.subFieldContainer}>
				<Text style={sharedStyle.subField}>Number of players</Text>
				<Input
					style={[sharedStyle.subFieldInputContainer, styles.shortInput]}
					inputStyle={[
						sharedStyle.subFieldInput,
						{ minWidth: 0, textAlign: 'center' },
					]}
					prefix={
						<Text style={[sharedStyle.subFieldInput, { paddingLeft: 20 }]}>
							-
						</Text>
					}
					suffix={
						<Text style={[sharedStyle.subFieldInput, { paddingRight: 20 }]}>
							+
						</Text>
					}
					value={players.toString()}
				/>
			</View>
			<View style={sharedStyle.subFieldContainer}>
				<Text style={sharedStyle.subField}>Owner wallet</Text>
				<Input
					style={[sharedStyle.subFieldInputContainer, styles.longInput]}
					inputStyle={sharedStyle.subFieldInput}
					placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
					placeholder="Enter Avalanche wallet address"
					onChangeText={handleChangeTokenAddress}
					value={tokenAddress}
				/>
			</View>
			<View style={sharedStyle.subFieldContainer}>
				<Text style={sharedStyle.subField}>Rewards</Text>
				<View style={styles.rankContainer}>
					<Text style={styles.rankTitle}>Top 1</Text>
					<Input
						style={[sharedStyle.subFieldInputContainer, styles.shortInput]}
						inputStyle={[sharedStyle.subFieldInput, { minWidth: 0 }]}
						suffix={
							<Text style={[sharedStyle.subFieldInput, { paddingRight: 20 }]}>
								%
							</Text>
						}
						value={rewards.top1.toString()}
					/>
				</View>
			</View>
		</View>
	);
};

export default TokenomicEconomy;

const styles = StyleSheet.create({
	shortInput: {
		width: 120,
	},
	longInput: {
		width: 300,
	},
	rankContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 30,
	},
	rankTitle: {
		fontFamily: montserratLight.style.fontFamily,
		color: '#ffffff',
		fontSize: 13,
		fontWeight: '300',
	},
});
