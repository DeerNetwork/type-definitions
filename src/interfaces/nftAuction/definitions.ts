export default {
  rpc: {},
  types: {
    AuctionId: "u64",
    DutchAuctionOf: "DutchAuction",
    EnglishAuctionOf: "EnglishAuction",
    AuctionBidOf: "AuctionBid",
    DutchAuction: {
      owner: "AccountId",
      class: "ClassId",
      instance: "InstanceId",
      min_price: "Balance",
      max_price: "Balance",
      deposit: "Balance",
      created_at: "BlockNumber",
      open_at: "Option<BlockNumber>",
      deadline: "BlockNumber",
    },
    EnglishAuction: {
      owner: "AccountId",
      class: "ClassId",
      instance: "InstanceId",
      init_price: "Balance",
      min_raise_price: "Balance",
      deposit: "Balance",
      created_at: "BlockNumber",
      open_at: "Option<BlockNumber>",
      deadline: "BlockNumber",
    },
    AuctionBid: {
      account: "AccountId",
      price: "Balance",
      bid_at: "BlockNumber",
    }
  },
};
