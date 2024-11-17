# World Ape CoinFlip 🎲🐵

## World Ape CoinFlip is an interactive coin flip game where users can bet using their ORO tokens. The game currently supports ORO, with future support for WORLD and ORB tokens in the pipeline. Built on the Worldcoin MiniKit React Template, it consists of three primary components:

1. Frontend: The user interface for players to interact with the game.
2. Backend: Handles the API interactions.
3. Contract: Manages the game's mechanics, including coinflip and token payouts.

## Deployment Instructions
### Prerequisites
Before you start, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (v8 or higher)
- A worldchain network RPC
- An Alchemy API key
- An World App Developer Account
- (Attention: The frontend should always be opened via scanning the QR code obtained from the World App Developer Portal, via Camera so it is redirected to the World App to open. After frontend is updated, please close your World App to remove the previous cache and start loading fresh again.)

1. Clone the Repository
```
git clone https://github.com/SkyYap/World-Ape-CoinFlip  
cd world-ape-coinflip  
```

2. Install Dependencies
Frontend:
```
cd frontend
pnpm install
```

Backend:
```
cd backend
npm install
```

Contract:
```
cd contract
yarn add
```

3. Configure Environment Variables
Frontend:
APP_ID="INSERT_APPID"
DEV_PORTAL_API_KEY="APIKEY"
WLD_CLIENT_ID=
WLD_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000

Backend:
WLD_CLIENT_ID=
WLD_CLIENT_SECRET=
AUTH_SECRET=

Contract:
PRIVATE_KEY=
WORLDCHAIN_SEPOLIA_RPC_URL=
WORLDCHAIN_MAINNET_RPC_URL=

4. Deploying
Frontend:
Just run `pnpm run build` and then let render do the job for you

Backend:
Just run `npm run start` and let render do the job for you

Contract:
`truffle compile`
`truffle migrate --network worldchain`
`truffle networks` to check the deployed contract address

### Summary
Frontend: Available at http://localhost:5174
Backend: Running at http://localhost:3000
Contract: Deployed using Truffle