export default {
  rpc: {},
  types: {
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
