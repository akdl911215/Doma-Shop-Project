import { BaseOutputDto } from "../../../../../common/dtos/base.output.dto";

export class BcryptDecodedInterfaceOutputDto extends BaseOutputDto<{
  readonly decoded: boolean;
}> {}
