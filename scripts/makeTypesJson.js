const fs = require("fs");
const { typesBundle } = require("../dist");

fs.writeFileSync("dist/types.json", JSON.stringify({ typesBundle }, null, 2));
