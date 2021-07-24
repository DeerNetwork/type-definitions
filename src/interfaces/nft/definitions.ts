export default {
  rpc: {},
  types: {
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
  },
};
