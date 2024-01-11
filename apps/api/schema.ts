import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
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

export default typeDefs;
