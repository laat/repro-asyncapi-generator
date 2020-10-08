#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
set -o xtrace

npm ci
node ./generate.js