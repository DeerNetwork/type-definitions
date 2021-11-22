import { WsProvider, ApiPromise } from "@polkadot/api";
import { typesBundleForPolkadot }  from "../src";

const account = "13UVJyLnbVp9RBZYFwFGyDvVd1y27Tt8tkntv6Q7JVPhFsTB";
const nftToken = { classId: 1, instanceId: 1 };

const urls = {
  "mainnet": "ws://localhost:9944",
  "dev": "ws://localhost:9944",
};

const verify = async (url, blockNumber) => {
  // connect to chain via provider
  console.log(`Connecting to url: ${url}...`);

  // construct API using provider
  console.log("Constructing API...");
  const api = new ApiPromise({
    provider: new WsProvider(url),
    typesBundle: typesBundleForPolkadot,
  });

  await api.isReady;

  console.log(`Querying hash for block ${blockNumber || "latest"}...`);
  if (blockNumber) {
    const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
    const version = await api.rpc.state.getRuntimeVersion(blockHash);
    console.log(`Got ${version.specName} spec version: ${version.specVersion}.`);

    console.log("Querying events...");
    const result = await api.query.system.events.at(blockHash);
    console.log(`Got events at block ${blockNumber}: ${JSON.stringify(result.toHuman(), null, 2)}`);
  } else {
    const version = await api.rpc.state.getRuntimeVersion();
    console.log(`Got ${version.specName} spec version: ${version.specVersion}.`);

    console.log("Querying events...");
    const result = await api.query.system.events();
    console.log(`Got latest events: ${JSON.stringify(result.toHuman(), null, 2)}`);

    console.log("Querying balance...");
    const bal = await api.query.system.account(account);
    console.log(`Got balance results: ${JSON.stringify(bal.toHuman())}.`);

    console.log("Query nft class detail...");
    const nftClassDetail = await api.query.nft.class(nftToken.classId);
    console.log(`Got nft class results: ${JSON.stringify(nftClassDetail.toHuman())}.`);

    console.log("Query nft token detail...");
    const nftTokenDetail = await api.query.nft.asset(nftToken.classId, nftToken.instanceId);
    console.log(`Got nft token results: ${JSON.stringify(nftTokenDetail.toHuman())}.`);
  }
};

// parse args
const args = process.argv.slice(2);
const network = args[0] || "mainnet";
const url = urls[network];
const block = args[1];

// kick off function
verify(url, block ? +block : undefined)
  .then(() => {
    console.log("Done!");
    process.exit(0);
  }).catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
