import { Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { metaMask, useMetaMask } from "./Metamask";


export const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, useMetaMask]]