#!/bin/bash

cd "$(dirname "$0")"

cd ..

# clean up
rm -rf node_modules

# remove previous if exists
rm package-lock.json

# create node_modules tree according to yarn.lock file
yarn install

# generate lock file for currently installed node_modules tree
npm shrinkwrap

# rename shrinkwrap to lock
mv npm-shrinkwrap.json package-lock.json

# adds network metadata to package-lock.json (resolved and integrity sha-1)
npm install
