"use client";

import { TokenList } from "@/components/token-list";
import { FeatherAssets, TristeroChains } from "./tristero-chains";

export { TristeroChains };

// Client component receives pre-computed data
export const TristeroTokenList = () => (
  <div>
    <div className="p-2 rounded-full bg-white/0 hover:bg-black/10 dark:hover:bg-white/30 transition duration-250 flex w-min max-w-full">
      <TokenList maxStack={10} tokens={TristeroChains} />
    </div>
  </div>
);

export const FeatherTokenList = () => (
  <div>
    <div className="p-2 rounded-full bg-white/0 hover:bg-black/10 dark:hover:bg-white/30 transition duration-250 flex w-min max-w-full">
      <TokenList maxStack={10} tokens={FeatherAssets} />
    </div>
  </div>
);
