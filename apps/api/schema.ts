export const typeDefs = `#graphql
	type Query {
		greeting: String
	}

	type Account {
		id: String!
		address: String!
		jwt: String
		name: String
		email: String
		profileImage: String
	}
`;
