const shell = require("shelljs");
const fs = require("fs");
const path = require("path");
const OUT_DIR = path.join(__dirname, "../pkg");

shell.rm("-rf", OUT_DIR);
shell.exec("node scripts/fetchMetadata.js");
shell.exec(
  "ts-node --skip-project node_modules/.bin/polkadot-types-from-defs --package '.' --endpoint ./deer.json --input ./src/interfaces"
);
shell.exec(
  "ts-node --skip-project node_modules/.bin/polkadot-types-from-chain --package '.' --endpoint ./deer.json --output ./src/interfaces"
);
shell.exec("tsc -p tsconfig.build.json");
fs.writeFileSync(
  path.join(OUT_DIR, "types.json"),
  JSON.stringify({ typesBundle: require(OUT_DIR).typesBundle }, null, 2)
);
shell.cp("-rf", ["README.md"], OUT_DIR);
const pkg = require(path.resolve(__dirname, "../package.json"));
delete pkg.scripts;
pkg.main = "index.js";
pkg.devDependencies = {
  "@polkadot/api": pkg.devDependencies["@polkadot/api"],
};
fs.writeFileSync(
  path.join(OUT_DIR, "package.json"),
  JSON.stringify(pkg, null, 2)
);
