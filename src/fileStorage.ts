export default {
  rpc: {},
  types: {
    FileId: "Vec<u8>",
    EnclaveId: "Vec<u8>",
    PutKey: "Vec<u8>",
    MachineId: "Vec<u8>",
    BalanceOf: "Balance",
    RoundIndex: "u32",
    NodeInfo: {
      rid: "u64",
      used: "u64",
      power: "u64",
      last_round: "RoundIndex",
    },
    RewardInfo: {
      mine_reward: "Balance",
      store_reward: "Balance",
      paid_mine_reward: "Balance",
      paid_store_reward: "Balance",
    },
    FileOrder: {
      fee: "Balance",
      file_size: "u64",
      expire_at: "BlockNumber",
      replicas: "Vec<AccountId>",
    },
    StoreFile: {
      reserved: "Balance",
      base_fee: "Balance",
      file_size: "u64",
      added_at: "BlockNumber",
    },
    StashInfo: {
      stasher: "AccountId",
      deposit: "Balance",
      machine_id: "Option<MachineId>",
    },
    RegisterInfo: {
      key: "PubKey",
      enclave: "EnclaveId",
    },
    NodeStats: {
      power: "u64",
      used: "u64",
    },
    SummaryStats: {
      power: "u128",
      used: "u128",
    },
  },
};
