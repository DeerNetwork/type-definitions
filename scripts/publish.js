const shell = require("shelljs");
const fs = require("fs");
const path = require("path");
const OUT_DIR = path.join(__dirname, "../pkg");

if (
  !["README.md", "package.json", "types.json", "index.js"].every((file) =>
    fs.existsSync(path.join(OUT_DIR, file))
  )
) {
  console.log("pkg is not ready to publish, exited");
  process.exit(1);
}

shell.cd(OUT_DIR);
shell.exec("npm publish");
