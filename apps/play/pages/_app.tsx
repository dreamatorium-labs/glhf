import { Fragment, useRef } from 'react';
import { View } from 'react-native';
import { ModalManager } from '@walless/gui';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../globals.css';

export default function App({ Component, pageProps }: AppProps) {
	const containerRef = useRef<View>(null);

	return (
		<Fragment>
			<Head>
				<title>glhf.world</title>
				<meta name="description" content="GLHF" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<View ref={containerRef}>
				<Component {...pageProps} />
			</View>
			<ModalManager />
		</Fragment>
	);
}
