import type { StackContext } from 'sst/constructs';
import { Api, Function } from 'sst/constructs';

import { apiDomainFromStage } from './util';

export const ApiStack = ({ stack, app }: StackContext) => {
	const domain = apiDomainFromStage(app.stage);
	const graphql = new Function(stack, 'graphql', {
		handler: 'apps/api/lambda',
	});

	const api = new Api(stack, 'api', {
		cors: {
			allowOrigins: ['*'],
			allowHeaders: ['Content-Type', 'Authorization'],
			allowMethods: ['GET', 'POST'],
		},
		routes: {
			'GET /graphql': { function: graphql },
			'POST /graphql': { function: graphql },
		},
		customDomain: domain,
	});

	stack.addOutputs({
		url: api.url,
		domain: api.customDomainUrl,
	});
};

export default ApiStack;
