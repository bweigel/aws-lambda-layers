#!/bin/bash

set -eou pipefail

for i in ./* ; do
  if [ -d "$i" ]; then
    pushd .
    cd $i
    ./build.sh
    popd
  fi
done