const landingAlias: Record<string, string> = {
	production: ' ',
	staging: 'stg.',
	development: 'dev.',
};

export const sslArn = process.env.SSL_ARN;

export const landingDomainFromStage = (stage: string) => {
	const prefix = landingAlias[stage] || `${stage}.`;
	return `${prefix.trim()}glhf.world`;
};

const apiAlias: Record<string, string> = {
	production: 'api.',
	staging: 'api-stg.',
	development: 'api-dev.',
};

export const apiDomainFromStage = (stage: string) => {
	const prefix = apiAlias[stage] || `${stage}.`;
	return `${prefix.trim()}glhf.world`;
};
