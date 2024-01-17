'use client';

import { View } from 'react-native';
import type { ShowModalConfigs } from '@walless/gui';
import { Button, modalActions } from '@walless/gui';
import { buttonStyle } from 'utils/style';

const AccountModal = () => {
	const handleDisconnect = async () => {
		await window.ethereum?.request({
			method: 'wallet_revokePermissions',
			params: [
				{
					eth_accounts: {},
				},
			],
		});
	};

	return (
		<View>
			<Button
				style={buttonStyle.button}
				titleStyle={buttonStyle.title}
				title="Disconnect wallet"
				onPress={handleDisconnect}
			/>
		</View>
	);
};

const modalId = 'Account Modal';

export const showAccountModal = (config: Partial<ShowModalConfigs>) => {
	modalActions.show({
		id: modalId,
		component: AccountModal,
		...config,
	});
};
