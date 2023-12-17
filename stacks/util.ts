const landingAlias = {
	production: ' ',
	staging: 'stg.',
	development: 'dev.',
};

export const sslArn =
	'arn:aws:acm:us-east-1:984261700405:certificate/e5067454-446f-405c-bec2-c18f2766baca';

export const landingDomainFromStage = (stage: string) => {
	const prefix = landingAlias[stage] || `${stage}.`;
	return `${prefix.trim()}glhf.world`;
};
