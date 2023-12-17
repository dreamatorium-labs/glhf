import type { SSTConfig } from 'sst';

import Landing from './stacks/landing';

export default {
	config() {
		return {
			name: 'glhf',
			region: 'ap-south-1',
		};
	},
	stacks(app) {
		app.stack(Landing);
	},
} satisfies SSTConfig;
