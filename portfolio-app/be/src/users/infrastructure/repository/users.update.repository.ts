import {
  BadRequestException,
  Dependencies,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersUpdateAdaptorInputDto } from '../../inbound/dtos/users.update.adaptor.input.dto';
import { UsersModel } from '../../domain/entity/users.model';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { NO_MATCH_USER_ID } from '../../../common/constants/http/errors/400';
import { HashEncodedService } from '../bcrypt/hash.encoded.service';
import { UsersUpdateAdaptorOutputDto } from '../../outbound/dtos/users.update.adaptor.output.dto';
import { UsersUpdateAdaptor } from '../../domain/adapter/users.update.adaptor';

@Injectable()
@Dependencies([PrismaService])
export class UsersUpdateRepository implements UsersUpdateAdaptor {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('HASH_ENCODED') private readonly hash: HashEncodedService,
  ) {}

  public async update(dto: {
    requestUser: UsersUpdateAdaptorInputDto;
    user: UsersModel;
  }): Promise<UsersUpdateAdaptorOutputDto> {
    const { id } = dto.user;

    const [dbUser] = await this.prisma.$transaction([
      this.prisma.users.findUnique({ where: { id } }),
    ]);
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);

    const {
      password: reqPassword,
      phone: reqPhone,
      investorId: reqAccountId,
    } = dto.requestUser;
    const {
      password: dbPassword,
      phone: dbPhone,
      id: dbId,
      investorId: dbAccountId,
    } = dbUser;

    const {
      response: { encoded },
    } = await this.hash.encoded({ password: reqPassword });

    const password = reqPassword === '' ? dbPassword : encoded;
    const phone = reqPhone === '' ? dbPhone : reqPhone;
    const investorId = reqInvestorId === '' ? dbInvestorId : reqInvestorId;

    if (dbId === id) {
      try {
        const [updateUser] = await this.prisma.$transaction([
          this.prisma.users.update({
            where: { id },
            data: {
              password,
              phone,
              investorId,
            },
          }),
        ]);
        return {
          response: updateUser,
        };
      } catch (e) {
        if (e instanceof InternalServerErrorException) {
          throw new InternalServerErrorException(e);
        } else {
          throw new Error(`${e}`);
        }
      }
    } else {
      throw new BadRequestException(NO_MATCH_USER_ID);
    }
  }
}
