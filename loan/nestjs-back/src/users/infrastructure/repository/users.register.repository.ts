import {
  Dependencies,
  Inject,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { UsersRegisterAdaptorInputDto } from "../../inbound/dtos/users.register.adaptor.input.dto";
import { UsersRegisterAdaptorOutputDto } from "../../outbound/dtos/users.register.adaptor.output.dto";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersRegisterAdaptor } from "../../domain/adaptors/users.register.adaptor";
import { HashEncodedService } from "../bcrypt/hash.encoded.service";

@Injectable()
@Dependencies([HashEncodedService, PrismaService])
export class UsersRegisterRepository implements UsersRegisterAdaptor {
  constructor(
    @Inject("HASH_ENCODED") private readonly hash: HashEncodedService,
    private readonly prisma: PrismaService
  ) {}

  public async register(
    dto: UsersRegisterAdaptorInputDto
  ): Promise<UsersRegisterAdaptorOutputDto> {
    const { userId, nickname, password, name, phone, address } = dto;
    try {
      const {
        response: { encoded: hashPassword },
      } = await this.hash.encoded({ password: password });

      const [createUser] = await this.prisma.$transaction([
        this.prisma.users.create({
          data: {
            userId,
            nickname,
            password: hashPassword,
            name,
            phone,
            address,
          },
        }),
      ]);

      return {
        response: createUser,
      };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
