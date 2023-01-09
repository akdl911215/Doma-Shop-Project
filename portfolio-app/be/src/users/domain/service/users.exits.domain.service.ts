import { Dependencies, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersExistsAdaptor } from '../adapter/users.exists.adaptor';
import { UsersExistsAdaptorInputDto } from '../../inbound/dtos/users.exists.adaptor.input.dto';
import { UsersExistsAdaptorOutputDto } from '../../outbound/dtos/users.exists.adaptor.output.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersExitsDomainService implements UsersExistsAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async exists(
    dto: UsersExistsAdaptorInputDto,
  ): Promise<UsersExistsAdaptorOutputDto> {
    const { phone, investorId } = dto;

    const user = await this.prisma.users.findFirst({
      where: { OR: [{ investorId }, { phone }] },
    });
    return {
      response: {
        investorId: user?.investorId,
        phone: user?.phone,
      },
    };
  }
}
