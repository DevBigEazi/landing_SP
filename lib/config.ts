export const LANDING_BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://landing-SellerPadi.vercel.app"
).replace(/\/$/, "");

export const APP_BASE_URL = (
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://app-SellerPadi.vercel.app")
).replace(/\/$/, "");

export const isTestnet =
  process.env.NEXT_PUBLIC_NETWORK?.toLowerCase() !== "mainnet";

export const NETWORK_NAME = isTestnet
  ? "Avalanche Fuji Testnet"
  : "Avalanche C-Chain";

export const BLOCK_EXPLORER_URL = isTestnet
  ? "https://testnet.snowtrace.io"
  : "https://snowtrace.io";

