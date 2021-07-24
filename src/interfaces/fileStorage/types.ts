// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Option, Struct, Vec, u128, u32, u64 } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name BalanceOf */
export interface BalanceOf extends Balance {}

/** @name EnclaveId */
export interface EnclaveId extends Bytes {}

/** @name FileId */
export interface FileId extends Bytes {}

/** @name FileOrder */
export interface FileOrder extends Struct {
  readonly fee: Balance;
  readonly file_size: u64;
  readonly expire_at: BlockNumber;
  readonly replicas: Vec<AccountId>;
}

/** @name MachineId */
export interface MachineId extends Bytes {}

/** @name NodeInfo */
export interface NodeInfo extends Struct {
  readonly rid: u64;
  readonly used: u64;
  readonly power: u64;
  readonly reported_at: BlockNumber;
}

/** @name NodeStats */
export interface NodeStats extends Struct {
  readonly power: u64;
  readonly used: u64;
}

/** @name PubKey */
export interface PubKey extends Bytes {}

/** @name RegisterInfo */
export interface RegisterInfo extends Struct {
  readonly key: PubKey;
  readonly enclave: EnclaveId;
}

/** @name RewardInfo */
export interface RewardInfo extends Struct {
  readonly mine_reward: Balance;
  readonly store_reward: Balance;
  readonly paid_mine_reward: Balance;
  readonly paid_store_reward: Balance;
}

/** @name RoundIndex */
export interface RoundIndex extends u32 {}

/** @name StashInfo */
export interface StashInfo extends Struct {
  readonly stasher: AccountId;
  readonly deposit: Balance;
  readonly machine_id: Option<MachineId>;
}

/** @name StoreFile */
export interface StoreFile extends Struct {
  readonly reserved: Balance;
  readonly base_fee: Balance;
  readonly file_size: u64;
  readonly added_at: BlockNumber;
}

/** @name SummaryStats */
export interface SummaryStats extends Struct {
  readonly power: u128;
  readonly used: u128;
}

export type PHANTOM_FILESTORAGE = 'fileStorage';
