import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { createPublicClient, http, formatEther } from "viem";
import { base, baseSepolia } from "viem/chains";

type ActiveNet = typeof base | typeof baseSepolia;

const NETS = {
  mainnet: {
    chain: base,
    chainId: 8453,
    rpc: "https://mainnet.base.org",
    explorer: "https://basescan.org",
    label: "Base Mainnet",
  },
  sepolia: {
    chain: baseSepolia,
    chainId: 84532,
    rpc: "https://sepolia.base.org",
    explorer: "https://sepolia.basescan.org",
    label: "Base Sepolia",
  },
};

let active = NETS.sepolia;

const sdk = new CoinbaseWalletSDK({
  appName: "Signal Lattice (Built for Base)",
  appLogoUrl: "https://base.org/favicon.ico",
});

const out = document.createElement("pre");
out.style.padding = "14px";
out.style.borderRadius = "12px";
out.style.background = "#0e1220";
out.style.color = "#dfe7ff";
out.style.minHeight = "280px";

function log(lines: string[]) {
  out.textContent = lines.join("\n");
}

function client(chain: ActiveNet) {
  return createPublicClient({
    chain,
    transport: http(active.rpc),
  });
}

async function connect() {
  const provider = sdk.makeWeb3Provider(active.rpc, active.chainId);
  const accounts = (await provider.request({
    method: "eth_requestAccounts",
  })) as string[];

  const address = accounts[0];
  const balance = await client(active.chain).getBalance({
    address: address as `0x${string}`,
  });

  log([
    "Wallet connected",
    `Network: ${active.label}`,
    `chainId: ${active.chainId}`,
    `Address: ${address}`,
    `Balance: ${formatEther(balance)} ETH`,
    `${active.explorer}/address/${address}`,
  ]);
}

async function latestBlock() {
  const block = await client(active.chain).getBlock();
  log([
    "Latest block",
    `Network: ${active.label}`,
    `Block number: ${block.number}`,
    `Timestamp: ${block.timestamp}`,
    `${active.explorer}/block/${block.number}`,
  ]);
}

function mount() {
  const root = document.createElement("div");
  root.style.maxWidth = "960px";
  root.style.margin = "24px auto";
  root.style.fontFamily = "system-ui";

  const h1 = document.createElement("h1");
  h1.textContent = "Signal Lattice";

  const btnConnect = document.createElement("button");
  btnConnect.textContent = "Connect Wallet";
  btnConnect.onclick = connect;

  const btnBlock = document.createElement("button");
  btnBlock.textContent = "Read Latest Block";
  btnBlock.onclick = latestBlock;

  const btnToggle = document.createElement("button");
  btnToggle.textContent = "Toggle Network";
  btnToggle.onclick = () => {
    active = active.chainId === 84532 ? NETS.mainnet : NETS.sepolia;
    log([`Switched to ${active.label}. Reconnect wallet.`]);
  };

  [btnConnect, btnBlock, btnToggle].forEach((b) => {
    b.style.marginRight = "8px";
  });

  root.append(h1, btnConnect, btnBlock, btnToggle, out);
  document.body.appendChild(root);

  log([
    "Ready",
    `Active network: ${active.label}`,
    "Connect wallet to begin",
  ]);
}

mount();
