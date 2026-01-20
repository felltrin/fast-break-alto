# MERNG-TypeScript Starter

MongoDB | Express | React | Node.js | GraphQL | TypeScript

## Tech Stack

- **Database**: MongoDB (Atlas)
- **Server**: Node.js + Express + Apollo Server v4
- **Client**: React 18 + Vite + Apollo Client
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
