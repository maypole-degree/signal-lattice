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
  - arrays.sol — a Solidity contract that demonstrates or manages arrays  
  - mapping.sol — contract that allows fast lookup by key (e.g. address => uint)
  - structs.sol — a Solidit contract focused on structs (custom data types)

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

X: https://x.com/Albert37725500
---

## Testnet Deployment (Base Sepolia)

As part of pre-production validation, one or more contracts may be deployed to the Base Sepolia test network to confirm correct behavior and tooling compatibility.

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

Contract #1 address:  
0x2fcbf185fb2b3445749f0fd77ed4b9333dc4aefa

Deployment and verification:
- https://sepolia.basescan.org/address/0x2fcbf185fb2b3445749f0fd77ed4b9333dc4aefa
- https://sepolia.basescan.org/0x2fcbf185fb2b3445749f0fd77ed4b9333dc4aefa/0#code  

Contract #2 address:  
0x37d503446e660dc1baf0092086f907a44f1fbb69

Deployment and verification:
- https://sepolia.basescan.org/address/0x37d503446e660dc1baf0092086f907a44f1fbb69
- https://sepolia.basescan.org/0x37d503446e660dc1baf0092086f907a44f1fbb69/0#code  

Contract #3 address:  
0xf2a8bdee569c983076d47542f3dac74279260632

Deployment and verification:
- https://sepolia.basescan.org/address/0xf2a8bdee569c983076d47542f3dac74279260632
- https://sepolia.basescan.org/0xf2a8bdee569c983076d47542f3dac74279260632/0#code  

These testnet deployments provide a controlled environment for validating Base tooling, account abstraction flows, and read-only onchain interactions prior to Base Mainnet usage.
