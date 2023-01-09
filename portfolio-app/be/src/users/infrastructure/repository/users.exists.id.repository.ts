import { Dependencies, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersExistsIdAdaptor } from '../../domain/adapter/users.exists.id.adaptor';
import { UsersExistsIdAdaptorInputDto } from '../../inbound/dtos/users.exists.id.adaptor.input.dto';
import { UsersExistsIdAdaptorOutputDto } from '../../outbound/dtos/users.exists.id.adaptor.output.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersExistsIdRepository implements UsersExistsIdAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async existsId(
    dto: UsersExistsIdAdaptorInputDto,
  ): Promise<UsersExistsIdAdaptorOutputDto> {
    const { id } = dto;
    const user = await this.prisma.users.findUnique({ where: { id } });

    return { response: { user } };
  }
}
