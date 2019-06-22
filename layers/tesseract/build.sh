#!/bin/bash -x

set -euxo pipefail

TAG=lambdalayer/tesseract
DIST_DIR=dist

rm -rf ${DIST_DIR}
docker build -t ${TAG} . #--no-cache
CONTAINER=$(docker run -d ${TAG} false)
docker cp $CONTAINER:/opt/build-dist ${DIST_DIR}
docker rm $CONTAINER
