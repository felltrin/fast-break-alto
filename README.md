# MERNG-TypeScript Starter

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"Express"/>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS"/>
  <img src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql" alt="GraphQL"/>
</p>

## Tech Stack

- **Database**: MongoDB (Atlas)
- **Server**: Node.js + Express.js + Apollo Server
- **Client**: React + Vite + Apollo Client
- **Language**: TypeScript strict mode
- **Code-gen**: GraphQL Code Generator for typed hooks
- **Dev Utils**: concurrently, nodemon, ts-node-dev

## Quick Run

1. Clone repo
2. Server:
   ```bash
   cd server
   npm i
   cp .env.example .env       # add your MongoDB URI
   npm run dev                  # starts on :4000/graphql
   ```
3. Client (new terminal)
   ```bash
   cd client
   npm i
   npm run dev
   ```
4. Visit http://localhost:5173

## Available Scripts

### Server

- nodemon server
  ```bash
  npm run dev
  ```
- production
  ```bash
  npm run build && npm start
  ```

### Client

- Vite + codegen watch
  ```bash
  npm run dev
  ```
- generate types once
  ```bash
  npm run codegen
  ```
- prod build
  ```bash
  npm run build
  ```
