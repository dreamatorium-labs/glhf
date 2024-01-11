import type { SSTConfig } from 'sst';

import { ApiStack } from './stacks/api';
import { LandingStack } from './stacks/landing';

export default {
	config() {
		return {
			name: 'glhf',
			region: 'ap-south-1',
		};
	},
	stacks(app) {
		app.stack(ApiStack);
		app.stack(LandingStack);
	},
} satisfies SSTConfig;
