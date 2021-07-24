const fs = require("fs");
const index = require("../dist");
fs.writeFileSync("./types.json", JSON.stringify(index.types, null, 4));
