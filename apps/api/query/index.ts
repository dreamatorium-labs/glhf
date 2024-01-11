import type { Resolver } from 'utils/runtime';

const greeting: Resolver<never, string> = async (_root, _args, { user }) => {
	const userId = user.id || 'Stranger';
	return `Welcome ${userId}`;
};

export const Query = {
	greeting,
};

export default Query;
