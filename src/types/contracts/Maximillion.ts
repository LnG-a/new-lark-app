/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";
import type BN from "bn.js";
import type { EventEmitter } from "events";
import type { EventLog } from "web3-core";
import type { ContractOptions } from "web3-eth-contract";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface Maximillion extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Maximillion;
  clone(): Maximillion;
  methods: {
    repayBehalf(borrower: string): PayableTransactionObject<void>;

    repayBehalfExplicit(
      borrower: string,
      vBnb_: string
    ): PayableTransactionObject<void>;

    vBnb(): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
