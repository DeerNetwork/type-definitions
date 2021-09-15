import * as nodeTypes from "./interfaces/definitions";
import { OverrideVersionedType } from "@polkadot/types/types";
import { typesFromDefs, jsonrpcFromDefs } from "./utils";

import v100 from "./spec/v100";

export { nodeTypes };

export const types = Object.assign(
  {
    Address: "MultiAddress",
    LookupSource: "MultiAddress",
    ElectionCompute: { // will removed when new polkadot api is released
      _enum: ["OnChain", "Signed", "Unsigned", "Emergency"],
    },
  },
  typesFromDefs(nodeTypes)
);

export const rpc = jsonrpcFromDefs(nodeTypes);
const bundle = {
  rpc,
  types: [
    {
      minmax: [0, 100],
      types: v100.types,
    }, {
      minmax: [100, undefined],
      types,
    },
  ] as OverrideVersionedType[],
};
export const typesBundleForPolkadot = {
  spec: {
    deer: bundle,
  },
};
