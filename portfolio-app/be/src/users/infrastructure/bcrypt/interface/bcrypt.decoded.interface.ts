import { BcryptDecodedInterfaceInputDto } from '../inbound/dtos/bcrypt.decoded.interface.input.dto';
import { BcryptDecodedInterfaceOutputDto } from '../outbound/dtos/bcrypt.decoded.interface.output.dto';

export interface BcryptDecodedInterface {
  readonly decoded: (
    dto: BcryptDecodedInterfaceInputDto,
  ) => Promise<BcryptDecodedInterfaceOutputDto>;
}
