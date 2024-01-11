import http from 'http';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { resolvers } from './resolvers';
import { typeDefs } from './schema';

const port = 3005;
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const launch = async () => {
	await server.start();
	app.use(cors(), bodyParser.json(), expressMiddleware(server as never));
	await new Promise((resolve) => httpServer.listen({ port }, resolve as never));

	console.log(`Server is ready at: http://localhost:${port}`);
};

launch();
