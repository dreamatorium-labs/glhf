export const navigationHeight = 64;

export const chainConfig = __DEV__
	? {
			chainId: '0xA869',
			chainName: 'Avalanche Testnet C-Chain',
			nativeCurrency: {
				name: 'Avalanche',
				symbol: 'AVAX',
				decimals: 18,
			},
			rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
			blockExplorerUrls: ['https://testnet.snowtrace.io/'],
		}
	: {
			chainId: '0xA86A',
			chainName: 'Avalanche Mainnet C-Chain',
			nativeCurrency: {
				name: 'Avalanche',
				symbol: 'AVAX',
				decimals: 18,
			},
			rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
			blockExplorerUrls: ['https://snowtrace.io/'],
		};
