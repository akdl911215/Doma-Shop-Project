import { BcriptIncodedInterface } from "./interfaces/bcript.incoded.interface";
import { BcriptDecodedInterface } from "./interfaces/bcript.decoded.interface";
import { ConfigService } from "@nestjs/config";
export declare class BcriptService implements BcriptIncodedInterface, BcriptDecodedInterface {
    private readonly configService;
    constructor(configService: ConfigService);
    decoded(password: string, hashPassword: string): Promise<boolean>;
    incoded(password: string): Promise<string>;
}
