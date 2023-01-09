import { BaseOutputDto } from '../../../../../common/outbound/dtos/base.output.dto';

export class BcryptDecodedInterfaceOutputDto extends BaseOutputDto<{
  readonly decoded: boolean;
}> {}
