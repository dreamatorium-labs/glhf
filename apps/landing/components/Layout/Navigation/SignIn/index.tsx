'use client';

import type { FC } from 'react';
import { Fragment, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BindDirections, Button, Hoverable } from '@walless/gui';
import Image from 'next/image';
import { chainConfig } from 'utils/config';
import { formatAddress } from 'utils/helpers';
import { buttonStyle, montserrat } from 'utils/style';

import { showAccountModal } from './AccountModal';

export const SignIn: FC = () => {
	const dropdownRef = useRef(null);
	const [account, setAccount] = useState('');

	const handleConnect = async () => {
		if (typeof window === 'undefined') return;
		try {
			window.ethereum
				?.request({
					method: 'wallet_requestPermissions',
					params: [
						{
							eth_accounts: {},
						},
					],
				})
				.then((accounts) => {
					accounts && setAccount(accounts?.[0]?.caveats?.[0]?.value[0]);

					window.ethereum?.request({
						method: 'wallet_addEthereumChain',
						params: [chainConfig],
					});
				})
				.then(() => {
					window.ethereum?.request({
						method: 'wallet_switchEthereumChain',
						params: [
							{
								chainId: chainConfig.chainId,
							},
						],
					});
				});
		} catch (err) {
			console.warn('No account found', err);
		}
	};

	const handleDropdown = () => {
		showAccountModal({
			bindingRef: dropdownRef,
			bindingDirection: BindDirections.BottomRight,
		});
	};

	return (
		<Fragment>
			{account ? (
				<View style={styles.accountContainer}>
					<Image
						src="/visual/mock-avatar.png"
						alt="User avatar"
						width={30}
						height={30}
					/>
					<Text style={styles.account}>{formatAddress(account)}</Text>
					<Hoverable hitSlop={15} ref={dropdownRef} onPress={handleDropdown}>
						<Image
							src="/visual/arrow-ic.svg"
							alt="Arrow icon"
							width={12}
							height={7}
						/>
					</Hoverable>
				</View>
			) : (
				<Button
					style={buttonStyle.button}
					titleStyle={buttonStyle.title}
					title="Connect wallet"
					onPress={handleConnect}
				/>
			)}
		</Fragment>
	);
};

const styles = StyleSheet.create({
	accountContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	account: {
		fontFamily: montserrat.style.fontFamily,
		fontSize: 16,
		color: '#ffffff',
	},
});
