import { Injectable } from "@nestjs/common";
import { BcryptDecodedInterface } from "./interface/bcrypt.decoded.interface";
import { BcryptDecodedInterfaceInputDto } from "./inbound/dtos/bcrypte.decoded.interface.input.dto";
import { BcryptDecodedInterfaceOutputDto } from "./outbound/dtos/bcryte.decoded.interface.output.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class HashDecodedService implements BcryptDecodedInterface {
  public async decoded(
    dto: BcryptDecodedInterfaceInputDto
  ): Promise<BcryptDecodedInterfaceOutputDto> {
    // password: 입력한 비밀번호
    // hashPassword: DB에 저장된 비밀번호
    const { password, hashPassword } = dto;

    return {
      response: { decoded: await bcrypt.compare(password, hashPassword) },
    };
  }
}
