import { Children } from 'react';
import { AppRegistry } from 'react-native';
import type { DocumentContext } from 'next/document';
import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

Document.getInitialProps = async ({ renderPage }: DocumentContext) => {
	AppRegistry.registerComponent('app', () => Main);
	/* eslint-disable-next-line */
	const { getStyleElement } = (AppRegistry as any).getApplication('app');
	const page = await renderPage();
	const styles = [getStyleElement()];

	return { ...page, styles: Children.toArray(styles) };
};

export default Document;
