import { BaseOutputDto } from "../../../../../common/dtos/base.output.dto";

export class BcryptEncodedInterfaceOutputDto extends BaseOutputDto<{
  readonly encoded: string;
}> {}
