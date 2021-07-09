export default {
  rpc: {},
  types: {
    PutKey: "Vec<u8>",
    RootId: "Vec<u8>",
    EnclaveId: "Vec<u8>",
    BalanceOf: "Balance",
    RoundIndex: "u32",
    NodeInfo: {
      last_report_at: "BlockNumber",
      key: "PubKey",
      reserved_root: "RootId",
      used_root: "RootId",
      used_size: "u64",
      reserved_size: "u64",
    },
    StatsInfo: {
      used_size: "u128",
      reserved_size: "u128",
    },
    FileOrder: {
      fee: "Balance",
      expire_at: "BlockNumber",
      replicas: "Vec<AccountId>",
    },
    StoreFile: {
      reserved: "Balance",
      file_size: "u64",
    },
    StashInfo: {
      stasher: "AccountId",
      key: "Option<PubKey>",
      deposit: "Balance",
      claimed_round: "RoundIndex",
      slash_defer_at: "BlockNumber",
    },
    RoundRewardInfo: {
      total_size: "u128",
      individual: "BTreeMap<AccountId, u64>",
      mine_reward: "Balance",
      store_reward: "Balance",
    },
  },
};
