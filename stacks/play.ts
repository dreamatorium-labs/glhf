import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import type { StackContext } from 'sst/constructs';
import { NextjsSite } from 'sst/constructs';

import { sslArn } from './util';

export const PlayStack = ({ stack }: StackContext) => {
	const certificate = Certificate.fromCertificateArn(stack, 'w-cert', sslArn);
	const hostedZone = HostedZone.fromLookup(stack, 'HostedZone', {
		domainName: 'glhf.world',
	});

	const site = new NextjsSite(stack as never, 'play-edge', {
		path: 'apps/play',
		edge: true,
		timeout: '5 seconds',
		memorySize: '1024 MB',
		runtime: 'nodejs18.x',
		customDomain: {
			domainName: '*.glhf.world',
			cdk: { hostedZone, certificate },
		},
	});

	stack.addOutputs({
		url: site.url || 'localhost',
	});
};

export default PlayStack;
