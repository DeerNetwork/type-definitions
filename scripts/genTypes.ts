import { writeFileSync } from "fs";
import { types } from "../src";
writeFileSync("./types.json", JSON.stringify(types, null, 4));
