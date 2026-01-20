import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { readFileSync } from "fs";
import { join } from "path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import "dotenv/config";
import mongoose from "mongoose";

const URI = process.env.MONGODB_URI || "";

const connectDB = async (): Promise<void> => {
  try {
    // console.log(URI);
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // @ts-ignore
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const typeDefs = readFileSync(
  join(process.cwd(), "src/schema/typeDefs.graphql"),
  "utf-8",
);

const resolvers = {
  Query: {
    books: () => books,
  },
};

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
await connectDB();

app.use(cors(), express.json(), expressMiddleware(server));

// @ts-ignore
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
