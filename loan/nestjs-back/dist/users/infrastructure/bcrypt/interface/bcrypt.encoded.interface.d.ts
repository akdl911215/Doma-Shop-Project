import { BcryptEncodedInterfaceInputDto } from "../inbound/dtos/bcrypte.encoded.interface.input.dto";
import { BcryptEncodedInterfaceOutputDto } from "../outbound/dtos/bcryte.encoded.interface.output.dto";
export interface BcryptEncodedInterface {
    readonly encoded: (dto: BcryptEncodedInterfaceInputDto) => Promise<BcryptEncodedInterfaceOutputDto>;
}
