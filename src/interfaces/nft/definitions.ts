export default {
  rpc: {
    createClassDeposit: {
      description: "Get deposit for create nft class",
      params: [
        {
          name: "bytesLen",
          type: "u32",
        },
      ],
      type: "BalanceInfo",
    },
    mintTokenDeposit: {
      description: "Get deposit for mint nft token",
      params: [
        {
          name: "bytesLen",
          type: "u32",
        },
      ],
      type: "BalanceInfo",
    },
  },
  types: {
    BalanceInfo: {
      amount: "Balance",
    },
  },
};
