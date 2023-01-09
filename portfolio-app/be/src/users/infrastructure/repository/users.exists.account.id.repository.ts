import { Dependencies, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersExistsAccountIdAdaptor } from '../../domain/adapter/users.exists.account.id.adaptor';
import { UsersExistsAccountIdAdaptorInputDto } from '../../inbound/dtos/users.exists.account.id.adaptor.input.dto';
import { UsersExistsAccountIdAdaptorOutputDto } from '../../outbound/dtos/users.exists.account.id.adaptor.output.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersExistsAccountIdRepository
  implements UsersExistsAccountIdAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async existsAccountId(
    dto: UsersExistsAccountIdAdaptorInputDto,
  ): Promise<UsersExistsAccountIdAdaptorOutputDto> {
    const { investorId } = dto;
    const user = await this.prisma.users.findUnique({ where: { investorId } });

    return { response: { investorId: !!user } };
  }
}
