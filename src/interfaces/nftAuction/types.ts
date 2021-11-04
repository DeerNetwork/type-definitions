// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct, u64 } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';
import type { ClassId, InstanceId } from '@polkadot/types/interfaces/uniques';

/** @name AuctionBid */
export interface AuctionBid extends Struct {
  readonly account: AccountId;
  readonly price: Balance;
  readonly bid_at: BlockNumber;
}

/** @name AuctionBidOf */
export interface AuctionBidOf extends AuctionBid {}

/** @name AuctionId */
export interface AuctionId extends u64 {}

/** @name DutchAuction */
export interface DutchAuction extends Struct {
  readonly owner: AccountId;
  readonly class: ClassId;
  readonly instance: InstanceId;
  readonly min_price: Balance;
  readonly max_price: Balance;
  readonly deposit: Balance;
  readonly created_at: BlockNumber;
  readonly open_at: Option<BlockNumber>;
  readonly deadline: BlockNumber;
}

/** @name DutchAuctionOf */
export interface DutchAuctionOf extends DutchAuction {}

/** @name EnglishAuction */
export interface EnglishAuction extends Struct {
  readonly owner: AccountId;
  readonly class: ClassId;
  readonly instance: InstanceId;
  readonly init_price: Balance;
  readonly min_raise_price: Balance;
  readonly deposit: Balance;
  readonly created_at: BlockNumber;
  readonly open_at: Option<BlockNumber>;
  readonly deadline: BlockNumber;
}

/** @name EnglishAuctionOf */
export interface EnglishAuctionOf extends EnglishAuction {}

export type PHANTOM_NFTAUCTION = 'nftAuction';
