// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct, bool, u32 } from '@polkadot/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name ClassDetails */
export interface ClassDetails extends Struct {
  readonly owner: AccountId;
  readonly deposit: DepositBalance;
  readonly instances: u32;
}

/** @name ClassId */
export interface ClassId extends u32 {}

/** @name DepositBalance */
export interface DepositBalance extends Balance {}

/** @name DepositBalanceOf */
export interface DepositBalanceOf extends Balance {}

/** @name InstanceDetails */
export interface InstanceDetails extends Struct {
  readonly owner: AccountId;
  readonly deposit: DepositBalance;
  readonly reserved: bool;
  readonly ready_transfer: Option<AccountId>;
}

/** @name InstanceId */
export interface InstanceId extends u32 {}

export type PHANTOM_NFT = 'nft';
