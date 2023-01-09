import {
  Dependencies,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { HashEncodedService } from '../bcrypt/hash.encoded.service';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersRegisterAdaptorInputDto } from '../../inbound/dtos/users.register.adaptor.input.dto';
import { UsersRegisterAdaptorOutputDto } from '../../outbound/dtos/users.register.adaptor.output.dto';
import { UsersRegisterAdaptor } from '../../domain/adapter/users.register.adaptor';

@Injectable()
@Dependencies([HashEncodedService, PrismaService])
export class UsersRegisterRepository implements UsersRegisterAdaptor {
  constructor(
    @Inject('HASH_ENCODED') private readonly hash: HashEncodedService,
    private readonly prisma: PrismaService,
  ) {}

  public async register(
    dto: UsersRegisterAdaptorInputDto,
  ): Promise<UsersRegisterAdaptorOutputDto> {
    try {
      const {
        response: { encoded },
      } = await this.hash.encoded({ password: dto.password });

      const [createUser] = await this.prisma.$transaction([
        this.prisma.users.create({
          data: {
            investorId: dto.investorId,
            password: encoded,
            phone: dto.phone,
            isMarketing: dto.isMarketing,
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
