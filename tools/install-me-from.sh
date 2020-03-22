#!/usr/bin/env bash

declare -r packagePath="file:${PWD}/dist"

echo -e "

Install me from '${packagePath}'
Examples:
  * yarn add '${packagePath}'
  * npm install '${packagePath}'

"
