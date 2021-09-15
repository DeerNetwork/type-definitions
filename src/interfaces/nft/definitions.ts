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
      instances: "Compact<u32>",
      royalty_rate: "Compact<Perbill>",
    },
    InstanceDetails: {
      owner: "AccountId",
      deposit: "DepositBalance",
      reserved: "bool",
      ready_transfer: "Option<AccountId>",
      royalty_rate: "Compact<Perbill>",
      royalty_beneficiary: "AccountId",
    },
  },
};
