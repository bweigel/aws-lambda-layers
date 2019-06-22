import cdk = require('@aws-cdk/cdk');
import { RetainedLambdaLayerVersion } from './layers-construct';

export class LambdaLayersStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new RetainedLambdaLayerVersion(this, "TesseractLayer", {
      contentLocation: "layers/tesseract/dist",
      description: "Layer mit Tesseract (4.1.0-rc4), fast-Datafiles und Leptonica (1.78.0)",
      name: "dna-tesseract"
    });

  }
}
