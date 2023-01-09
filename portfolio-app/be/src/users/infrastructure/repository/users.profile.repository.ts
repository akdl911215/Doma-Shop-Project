import { Dependencies, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersModel } from '../../domain/entity/users.model';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { UsersProfileAdaptorOutputDto } from '../../outbound/dtos/users.profile.adaptor.output.dto';
import { UsersProfileAdaptor } from '../../domain/adapter/users.profile.adaptor';

@Injectable()
@Dependencies([PrismaService])
export class UsersProfileRepository implements UsersProfileAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async userProfile(
    dto: UsersModel,
  ): Promise<UsersProfileAdaptorOutputDto> {
    const { id } = dto;
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    return { response: user };
  }
}
