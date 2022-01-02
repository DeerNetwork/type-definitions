export default {
  rpc: {
    storeFee: {
      description: "Get fee for store ipfs file.",
      params: [
        {
          name: "fileSize",
          type: "u64",
        },
        {
          name: "time",
          type: "BlockNumber",
        },
      ],
      type: "StoreFeeInfo",
    },
    nodeDeposit: {
      description: "Get node deposit.",
      params: [
        {
          name: "controller",
          type: "AccountId",
        },
      ],
      type: "NodeDepositInfo",
    },
  },
  types: {
    StoreFeeInfo: {
      fee: "Balance",
    },
    NodeDepositInfo: {
      currentDeposit: "Balance",
      slashDeposit: "Balance",
      slashUsedDeposit: "Balance",
    },
  },
};
