// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Compact, Struct, u64 } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';
import type { ClassId, InstanceId } from '@polkadot/types/interfaces/uniques';

/** @name AuctionBid */
export interface AuctionBid extends Struct {
  readonly account: AccountId;
  readonly price: Compact<Balance>;
  readonly bid_at: Compact<BlockNumber>;
}

/** @name AuctionBidOf */
export interface AuctionBidOf extends AuctionBid {}

/** @name AuctionId */
export interface AuctionId extends u64 {}

/** @name DutchAuction */
export interface DutchAuction extends Struct {
  readonly owner: AccountId;
  readonly class: Compact<ClassId>;
  readonly instance: Compact<InstanceId>;
  readonly min_price: Compact<Balance>;
  readonly max_price: Compact<Balance>;
  readonly deposit: Compact<Balance>;
  readonly created_at: Compact<BlockNumber>;
  readonly open_at: Compact<BlockNumber>;
  readonly deadline: Compact<BlockNumber>;
}

/** @name DutchAuctionOf */
export interface DutchAuctionOf extends DutchAuction {}

/** @name EnglishAuction */
export interface EnglishAuction extends Struct {
  readonly owner: AccountId;
  readonly class: Compact<ClassId>;
  readonly instance: Compact<InstanceId>;
  readonly init_price: Compact<Balance>;
  readonly min_raise_price: Compact<Balance>;
  readonly deposit: Compact<Balance>;
  readonly created_at: Compact<BlockNumber>;
  readonly open_at: Compact<BlockNumber>;
  readonly deadline: Compact<BlockNumber>;
}

/** @name EnglishAuctionOf */
export interface EnglishAuctionOf extends EnglishAuction {}

export type PHANTOM_NFTAUCTION = 'nftAuction';
