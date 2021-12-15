import type { RegistryTypes, OverrideModuleType } from "@polkadot/types/types";

const types: RegistryTypes = {
  Address: "MultiAddress",
  LookupSource: "MultiAddress",
  ElectionCompute: {
    _enum: ["OnChain", "Signed", "Unsigned", "Emergency"],
  },

  ClassId: "u32",
  InstanceId: "u32",
  DepositBalance: "Balance",
  DepositBalanceOf: "Balance",
  ClassDetails: {
    owner: "AccountId",
    deposit: "DepositBalance",
    instances: "u32",
  },
  InstanceDetails: {
    owner: "AccountId",
    deposit: "DepositBalance",
    reserved: "bool",
    ready_transfer: "Option<AccountId>",
  },
  ClassIdOf: "ClassId",
  InstanceIdOf: "InstanceId",
  OrderDetails: {
    owner: "AccountId",
    price: "Balance",
    deposit: "Balance",
    deadline: "Option<BlockNumber>",
  },
  FileId: "Vec<u8>",
  EnclaveId: "Vec<u8>",
  PubKey: "Vec<u8>",
  MachineId: "Vec<u8>",
  BalanceOf: "Balance",
  RoundIndex: "u32",
  NodeInfo: {
    rid: "u64",
    used: "u64",
    power: "u64",
    reported_at: "BlockNumber",
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
};

const typesAlias: Record<string, OverrideModuleType> = {};

export default {
  types,
  typesAlias,
};
