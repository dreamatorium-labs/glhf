import type { SSTConfig } from 'sst';

import { ApiStack } from './stacks/api';
import { LandingStack } from './stacks/landing';
import { PlayStack } from './stacks/play';

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
		app.stack(PlayStack);
	},
} satisfies SSTConfig;
