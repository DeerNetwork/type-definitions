import * as utils from "@open-web3/orml-type-definitions/utils";
import nftOrder from "./nftOrder";

export const nodeTypes = {
  nftOrder,
};

export const types = {...utils.typesFromDefs(nodeTypes)};
export const rpc = utils.jsonrpcFromDefs(nodeTypes);
export const typesAlias = utils.typesAliasFromDefs(nodeTypes);
const bundle = {
  rpc,
  types: [
    {
      minmax: [undefined, undefined] as any,
      types: Object.assign({}, types),
    },
  ],
  alias: typesAlias,
};
export const typesBundleForPolkadot = {
  spec: {
    nft360: bundle,
  },
};
