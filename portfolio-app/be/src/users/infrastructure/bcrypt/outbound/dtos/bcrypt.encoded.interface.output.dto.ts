import { BaseOutputDto } from '../../../../../common/outbound/dtos/base.output.dto';

export class BcryptEncodedInterfaceOutputDto extends BaseOutputDto<{
  readonly encoded: string;
}> {}
