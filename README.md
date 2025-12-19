# Signal Lattice

Built for Base.  
Deployed on Base Mainnet.

Signal Lattice is a compact browser-based reference project that demonstrates how to connect a Coinbase Wallet, validate Base networks, and perform read-only onchain queries using official Base RPC endpoints and Coinbase SDKs.

---

## Libraries used

- @coinbase/wallet-sdk  
  Wallet connection and account access.

- @coinbase/onchainkit  
  Base-aligned primitives and account abstraction utilities.

- viem  
  Read-only RPC client for Base Mainnet and Base Sepolia.

- Base GitHub repositories  
  Used as dependencies to align with Base infrastructure and tooling.

---

## What the script does

The app.signal-lattice.ts script:

1. Connects a Coinbase Wallet  
2. Validates the active Base chainId (8453 / 84532)  
3. Reads ETH balances from Base RPC  
4. Fetches latest block metadata  
5. Outputs Basescan links for verification  

All interactions are strictly read-only.

---

## Repository structure

- app.signal-lattice.ts  
  Browser script for wallet connection and Base chain inspection.

- contracts/  
  Solidity contracts deployed to Base Sepolia for testnet validation:
  - your_contract.sol — minimal deployment verification contract  
  - your_contract.sol — simple stateful interaction contract  
  - your_contract.sol — lightweight read-only query contract  

- package.json  
  Dependency manifest referencing Coinbase and Base repositories.

- README.md  
  Technical documentation and deployment references.

---

## Base network references

Supported networks:

Base Mainnet  
chainId (decimal): 8453  
Explorer: https://basescan.org  

Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

---

## Installation and execution

Install dependencies with Node.js.  
Serve the project with any modern dev server and open it in a browser.

Expected result:
- Wallet address and balance displayed  
- Active Base chainId visible  
- Latest block data readable  
- Basescan links provided  

---

## License

MIT License

Copyright (c) 2025 emails.maypole-degree

---

## Author

GitHub: https://github.com/settings/emails.maypole-degree  
Email: maypole.degree_0j@icloud.com    

---

## Testnet Deployment (Base Sepolia)

As part of pre-production validation, one or more contracts may be deployed to the Base Sepolia test network to confirm correct behavior and tooling compatibility.

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

Contract #1 address:  
0xfbfe9e889e4d6640978cf41b2ed83d2aeaca62a0

Deployment and verification:
- https://sepolia.basescan.org/address/0xfbfe9e889e4d6640978cf41b2ed83d2aeaca62a0
- https://sepolia.basescan.org/0xfbfe9e889e4d6640978cf41b2ed83d2aeaca62a0/0#code  

Contract #2 address:  
0x3bb94aa103f3919957dab7179d950a57138ec5d6

Deployment and verification:
- https://sepolia.basescan.org/address/0x3bb94aa103f3919957dab7179d950a57138ec5d6
- https://sepolia.basescan.org/0x3bb94aa103f3919957dab7179d950a57138ec5d6/0#code  

Contract #3 address:  
0x12e22915564b8f67877b7257a054e17c63488eb8

Deployment and verification:
- https://sepolia.basescan.org/address/0x12e22915564b8f67877b7257a054e17c63488eb8
- https://sepolia.basescan.org/0x12e22915564b8f67877b7257a054e17c63488eb8/0#code  

These testnet deployments provide a controlled environment for validating Base tooling, account abstraction flows, and read-only onchain interactions prior to Base Mainnet usage.
