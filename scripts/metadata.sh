#!/bin/bash
# Must run with a local edgeware chain available
endpoint=${ENDPOINT_PRC:-http://localhost:9933}
curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' $endpoint > deer.json