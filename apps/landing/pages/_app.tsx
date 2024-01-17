import { Fragment, useEffect, useRef } from 'react';
import { View } from 'react-native';
import type { MetaMaskSDKOptions } from '@metamask/sdk';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { modalActions, ModalManager } from '@walless/gui';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../globals.css';

export default function App({ Component, pageProps }: AppProps) {
	const containerRef = useRef<View>(null);
	const host =
		typeof window !== 'undefined' ? window.location.host : 'defaultHost';

	const sdkOptions: MetaMaskSDKOptions = {
		logging: { developerMode: false },
		checkInstallationImmediately: false,
		dappMetadata: {
			name: 'http://localhost:3000',
			url: host,
			base64Icon: '',
			iconUrl: '',
		},
	};

	useEffect(() => modalActions.setContainerRef(containerRef), []);

	return (
		<Fragment>
			<MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
				<Head>
					<title>glhf.world</title>
					<meta name="description" content="Create your web3 Game in minutes" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.png" />
				</Head>
				<View ref={containerRef}>
					<Component {...pageProps} />
				</View>
				<ModalManager />
			</MetaMaskProvider>
		</Fragment>
	);
}
