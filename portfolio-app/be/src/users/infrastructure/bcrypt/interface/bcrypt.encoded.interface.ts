import { BcryptEncodedInterfaceInputDto } from '../inbound/dtos/bcrypt.encoded.interface.input.dto';
import { BcryptEncodedInterfaceOutputDto } from '../outbound/dtos/bcrypt.encoded.interface.output.dto';

export interface BcryptEncodedInterface {
  readonly encoded: (
    dto: BcryptEncodedInterfaceInputDto,
  ) => Promise<BcryptEncodedInterfaceOutputDto>;
}
