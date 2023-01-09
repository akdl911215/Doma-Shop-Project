import {
  BadRequestException,
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersDeleteAdaptor } from '../../domain/adapter/users.delete.adaptor';
import { UsersDeleteAdaptorInputDto } from '../../inbound/dtos/users.delete.adaptor.input.dto';
import { UsersModel } from '../../domain/entity/users.model';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { NO_MATCH_USER_ID } from '../../../common/constants/http/errors/400';
import { UsersDeleteAdaptorOutputDto } from '../../outbound/dtos/users.delete.adaptor.output.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersDeleteRepository implements UsersDeleteAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async delete(dto: {
    requestUser: UsersDeleteAdaptorInputDto;
    user: UsersModel;
  }): Promise<UsersDeleteAdaptorOutputDto> {
    const [dbUser] = await this.prisma.$transaction([
      this.prisma.users.findUnique({ where: { id: dto.requestUser.id } }),
    ]);
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);
    const { id } = dbUser;

    if (dto.user.id === id) {
      try {
        await this.prisma.$transaction([
          this.prisma.users.delete({ where: { id } }),
        ]);

        return { response: { delete: true } };
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
