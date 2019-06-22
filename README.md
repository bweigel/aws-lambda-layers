AWS lambda layers
===

## Description

To build and deploy AWS Lambda Layers (and Versions). When the code is updated a new Layer Version is deployed and the _old version is retained_.
The layer's build files (`Dockerfile` and `build.sh`) are located in subdirectories of `layers`.
The build step creates a `dist` folder, where the layer content is put. The `dist`-folders contain the layer-content.

## How-To

- install dependencies
    ```shell
    npm i
    ```
- build layers
    ```shell
    npm run build:layers
    ```
- deploy stack with layers
    ```shell
    cdk deploy
    ```

