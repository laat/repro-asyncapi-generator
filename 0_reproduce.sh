#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
set -o xtrace

npm ci
./node_modules/.bin/ag src/simple.yaml @asyncapi/html-template --force-write