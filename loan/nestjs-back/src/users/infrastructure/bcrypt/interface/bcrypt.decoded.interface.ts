import { BcryptDecodedInterfaceInputDto } from "../inbound/dtos/bcrypte.decoded.interface.input.dto";
import { BcryptDecodedInterfaceOutputDto } from "../outbound/dtos/bcryte.decoded.interface.output.dto";

export interface BcryptDecodedInterface {
  readonly decoded: (
    dto: BcryptDecodedInterfaceInputDto
  ) => Promise<BcryptDecodedInterfaceOutputDto>;
}
