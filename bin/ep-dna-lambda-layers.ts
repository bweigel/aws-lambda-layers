#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { LambdaLayersStack } from '../lib/lambda-layers-stack';

const app = new cdk.App();

new LambdaLayersStack(app, 'LambdaLayersStack', {
    stackName: "lambda-layers",
    tags: {
        repo: "https://github.com/bweigel/aws-lambda-tesseract-layer",
        maintainer: "bweigel"
    }
});
