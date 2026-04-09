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

export const featherTokens = [
  "bitcoin",
  "monero",
  "ethereum",
  { chain: "ethereum", address: "usdc" },
  "litecoin",
  "solana",
];

export const TristeroChains = tristeroProdChains.map((k) => ({
  src: `/network/${k}.png`,
  name: chains[k as keyof typeof chains]?.display || k,
  symbol: chains[k as keyof typeof chains]?.gasTokenSymbol || "",
}));

export const FeatherAssets = featherTokens.map((k) => {
  if (typeof k === "object") {
    const data = chains[k.chain as keyof typeof chains];
    return {
      src:
        k.address === "native"
          ? `/network/${k.chain}.png`
          : `/tokens/${k.address}.png`,
      name:
        k.address === "native"
          ? data.display
          : `${k.address.toUpperCase()} (${data.display})`,
      symbol:
        k.address === "native" ? data.gasTokenSymbol : k.address.toUpperCase(),
    };
  }
  return {
    src: `/network/${k}.png`,
    name: chains[k as keyof typeof chains]?.display || k,
    symbol: chains[k as keyof typeof chains]?.gasTokenSymbol || "",
  };
});
