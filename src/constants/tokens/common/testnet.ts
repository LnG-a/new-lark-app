import beth from "assets/img/tokens/beth.svg";
import btc from "assets/img/tokens/btc.svg";
import fil from "assets/img/tokens/fil.svg";
import nai from "assets/img/tokens/nai.svg";
import nwl from "assets/img/tokens/nwl.svg";
import { TOKEN_ADDRESSES } from "constants/contracts/addresses";
import { FilChainId, Token } from "types";

export const TESTNET_TOKENS = {
  nwl: {
    id: "nwl",
    symbol: "NWL",
    name: "Narwhal",
    decimals: 18,
    address: TOKEN_ADDRESSES.nwl[FilChainId.TESTNET],
    asset: nwl,
  } as Token,
  wbtc: {
    id: "wbtc",
    symbol: "WBTC",
    name: "BitCoin",
    decimals: 18,
    address: TOKEN_ADDRESSES.btc[FilChainId.TESTNET],
    asset: btc,
  } as Token,
  fil: {
    id: "fil",
    symbol: "FIL",
    name: "FileCoin",
    decimals: 18,
    address: TOKEN_ADDRESSES.fil[FilChainId.TESTNET],
    isNative: true,
    asset: fil,
  } as Token,
  weth: {
    id: "weth",
    symbol: "WETH",
    name: "Ethereum",
    decimals: 18,
    address: TOKEN_ADDRESSES.eth[FilChainId.TESTNET],
    asset: beth,
  } as Token,
  // nai: {
  //   id: "nai",
  //   symbol: "NAI",
  //   name: "Nai",
  //   decimals: 18,
  //   address: TOKEN_ADDRESSES.nai[FilChainId.TESTNET],
  //   asset: nai,
  // } as Token,
};
