#!/bin/sh
# This script is used to build the project.

# Build Svelte project
cp .env client/.env
cd client
npm install
npm run build
cd ..

# Build Express project
npx tsc --build tsconfig.json

