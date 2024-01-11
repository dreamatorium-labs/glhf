import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import type { StackContext } from 'sst/constructs';
import { NextjsSite } from 'sst/constructs';

import { landingDomainFromStage, sslArn } from './util';

export const LandingStack = ({ stack, app }: StackContext) => {
	const domain = landingDomainFromStage(app.stage);
	const certificate = Certificate.fromCertificateArn(stack, 'w-cert', sslArn);
	const hostedZone = HostedZone.fromLookup(stack, 'HostedZone', {
		domainName: 'glhf.world',
	});

	const site = new NextjsSite(stack as never, 'landing-edge', {
		path: 'apps/landing',
		edge: true,
		timeout: '5 seconds',
		memorySize: '1024 MB',
		runtime: 'nodejs18.x',
		customDomain: {
			domainName: domain,
			cdk: { hostedZone, certificate },
		},
	});

	stack.addOutputs({
		url: site.url || 'localhost',
		customDomain: domain,
	});
};

export default LandingStack;
