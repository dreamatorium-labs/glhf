import Query from 'query';
import Account from 'types/Account';

import typeDefs from './schema';

const resolvers = {
	Query,
	Account,
};

export const apolloConfigs = {
	typeDefs,
	resolvers,
};
