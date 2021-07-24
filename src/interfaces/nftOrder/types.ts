// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';
import type { ClassId, InstanceId } from '@polkadot/types/interfaces/uniques';

/** @name ClassIdOf */
export interface ClassIdOf extends ClassId {}

/** @name InstanceIdOf */
export interface InstanceIdOf extends InstanceId {}

/** @name OrderDetails */
export interface OrderDetails extends Struct {
  readonly owner: AccountId;
  readonly price: Balance;
  readonly deposit: Balance;
  readonly deadline: Option<BlockNumber>;
}

export type PHANTOM_NFTORDER = 'nftOrder';
