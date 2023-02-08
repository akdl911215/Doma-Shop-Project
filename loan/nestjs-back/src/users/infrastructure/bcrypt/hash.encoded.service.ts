import { Injectable } from "@nestjs/common";
import { BcryptEncodedInterface } from "./interface/bcrypt.encoded.interface";
import * as bcrypt from "bcrypt";
import { ConfigService } from "@nestjs/config";
import { BcryptEncodedInterfaceInputDto } from "./inbound/dtos/bcrypte.encoded.interface.input.dto";
import { BcryptEncodedInterfaceOutputDto } from "./outbound/dtos/bcryte.encoded.interface.output.dto";

@Injectable()
export class HashEncodedService implements BcryptEncodedInterface {
  constructor(private readonly configService: ConfigService) {}
  public async encoded(
    dto: BcryptEncodedInterfaceInputDto
  ): Promise<BcryptEncodedInterfaceOutputDto> {
    const { password } = dto;

    return {
      response: {
        encoded: await bcrypt.hash(
          password,
          Number(this.configService.get<number>("BCRIPT_SOLT_NUMBER"))
        ),
      },
    };
  }
}
