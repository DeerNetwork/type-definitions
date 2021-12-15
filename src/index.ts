import type { OverrideVersionedType } from "@polkadot/types/types";
import * as chainTypes from "./interfaces/definitions";
import { typesFromDefs, jsonrpcFromDefs } from "./utils";

import v100 from "./spec/v100";
import v230 from "./spec/v229";
import v299 from "./spec/v299";

const rpc = jsonrpcFromDefs(chainTypes);
const types = typesFromDefs(chainTypes);

const bundle = {
  rpc,
  types: [
    {
      minmax: [0, 100],
      types: v100.types,
    },
    {
      minmax: [100, 229],
      types: v230.types,
    },
    {
      minmax: [230, 299],
      types: v299.types,
    },
    {
      minmax: [300, undefined],
      types,
    },
  ] as OverrideVersionedType[],
};

export const typesBundle = {
  spec: {
    deer: bundle,
  },
};

/**
 * @deprecated use typesBundle instend
 */
export const typesBundleForPolkadot = typesBundle;
