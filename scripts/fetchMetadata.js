const http = require("http");
const fs = require("fs");
const stream = fs.createWriteStream("deer.json");
const data = JSON.stringify({
  id: "1",
  jsonrpc: "2.0",
  method: "state_getMetadata",
  params: [],
});

const options = {
  hostname: "localhost",
  port: 9933,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = http.request(options, (res) => {
  res.pipe(stream);
});

req.on("error", (error) => {
  console.error(error);
});
req.write(data);
req.end(() => {
  console.log("Fetch metadata succeed");
});
