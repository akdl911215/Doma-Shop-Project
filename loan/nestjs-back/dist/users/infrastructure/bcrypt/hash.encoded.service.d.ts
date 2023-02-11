import { BcryptEncodedInterface } from "./interface/bcrypt.encoded.interface";
import { ConfigService } from "@nestjs/config";
import { BcryptEncodedInterfaceInputDto } from "./inbound/dtos/bcrypte.encoded.interface.input.dto";
import { BcryptEncodedInterfaceOutputDto } from "./outbound/dtos/bcryte.encoded.interface.output.dto";
export declare class HashEncodedService implements BcryptEncodedInterface {
    private readonly configService;
    constructor(configService: ConfigService);
    encoded(dto: BcryptEncodedInterfaceInputDto): Promise<BcryptEncodedInterfaceOutputDto>;
}
