import * as nodeTypes from "./interfaces/definitions";
import { typesFromDefs, jsonrpcFromDefs } from "./utils";

export { nodeTypes };

export const types = {
  Address: "MultiAddress",
  LookupSource: "MultiAddress",
  ...typesFromDefs(nodeTypes),
};

export const rpc = jsonrpcFromDefs(nodeTypes);
const bundle = {
  rpc,
  types: [
    {
      minmax: [undefined, undefined] as any,
      types,
    },
  ],
};
export const typesBundleForPolkadot = {
  spec: {
    nft360: bundle,
  },
};
