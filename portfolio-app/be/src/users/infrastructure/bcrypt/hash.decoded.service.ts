import { Injectable } from '@nestjs/common';
import { BcryptDecodedInterface } from './interface/bcrypt.decoded.interface';
import * as bcrypt from 'bcrypt';
import { BcryptDecodedInterfaceInputDto } from './inbound/dtos/bcrypt.decoded.interface.input.dto';
import { BcryptDecodedInterfaceOutputDto } from './outbound/dtos/bcrypt.decoded.interface.output.dto';

@Injectable()
export class HashDecodedService implements BcryptDecodedInterface {
  public async decoded(
    dto: BcryptDecodedInterfaceInputDto,
  ): Promise<BcryptDecodedInterfaceOutputDto> {
    const { password, hashPassword } = dto;

    return {
      response: { decoded: await bcrypt.compare(password, hashPassword) },
    };
  }
}
