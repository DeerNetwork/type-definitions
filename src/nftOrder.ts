export default {
  rpc: {},
  types: {
    ClassId: "u32",
    InstanceId: "u32",
    ClassIdOf: "ClassId",
    InstanceIdOf: "InstanceId",
    OrderDetails: {
      owner: "AccountId",
      price: "Balance",
      deposit: "Balance",
      deadline: "Option<BlockNumber>",
    },
  },
};
