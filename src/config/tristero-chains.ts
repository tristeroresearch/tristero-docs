import chains from "./chains.json";

const tristeroProdChains: string[] = [
  "ethereum",
  "avalanche",
  "polygon",
  "optimism",
  "solana",
  "monad",
  "unichain",
  "mantle",
  "sonic",
  "sei",
  "gnosis",
  "scroll",
  "ronin",
  "mode",
  "linea",
  "ink",
  "injevm",
  "bob",
  "apechain",
  "abstract",
];

// Export as a plain array - no React, no "use client"
export const TristeroChains = tristeroProdChains.map((k) => ({
  src: `/network/${k}.png`,
  name: chains[k as keyof typeof chains]?.display || k,
  symbol: chains[k as keyof typeof chains]?.gasTokenSymbol || "",
}));
