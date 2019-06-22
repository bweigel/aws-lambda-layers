import cdk = require('@aws-cdk/cdk');
import { AssetCode, LayerVersion, LayerVersionProps, CfnLayerVersion, Runtime } from '@aws-cdk/aws-lambda';

export interface LambdaLayerProps {
  readonly contentLocation: string
  readonly compatibleRuntimes?: Runtime[];
  readonly description?: string;
  readonly license?: string;
  readonly name?: string;
}

export class RetainedLambdaLayerVersion extends LayerVersion {

  constructor(scope: cdk.Construct, id: string, props: LambdaLayerProps) {

    const props_: LayerVersionProps = {
      description: props.description,
      compatibleRuntimes: props.compatibleRuntimes,
      code: new AssetCode(props.contentLocation),
      license: props.license,
      name: props.name,
    }

    super(scope, id, props_);

    const layerversion = this.node.findChild('Resource') as CfnLayerVersion
    layerversion.addOverride('UpdateReplacePolicy', "Retain") // retain old layer versions (see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html & https://www.reddit.com/r/aws/comments/amecr5/cloudformation_awslambdalayerversion_how_to/)

  }
}
