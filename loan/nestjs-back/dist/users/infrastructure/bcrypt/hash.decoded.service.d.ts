import { BcryptDecodedInterface } from "./interface/bcrypt.decoded.interface";
import { BcryptDecodedInterfaceInputDto } from "./inbound/dtos/bcrypte.decoded.interface.input.dto";
import { BcryptDecodedInterfaceOutputDto } from "./outbound/dtos/bcryte.decoded.interface.output.dto";
export declare class HashDecodedService implements BcryptDecodedInterface {
    decoded(dto: BcryptDecodedInterfaceInputDto): Promise<BcryptDecodedInterfaceOutputDto>;
}
