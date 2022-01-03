// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct } from '@polkadot/types-codec';
import type { Balance } from '@polkadot/types/interfaces/runtime';

/** @name NodeDepositInfo */
export interface NodeDepositInfo extends Struct {
  readonly currentDeposit: Balance;
  readonly slashDeposit: Balance;
  readonly usedDeposit: Balance;
}

/** @name StoreFeeInfo */
export interface StoreFeeInfo extends Struct {
  readonly fee: Balance;
}

export type PHANTOM_FILESTORAGE = 'fileStorage';
