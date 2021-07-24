const { typesBundleForPolkadot } = require("../dist");
const { WsProvider, ApiPromise } = require("@polkadot/api");

const account = "";

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
