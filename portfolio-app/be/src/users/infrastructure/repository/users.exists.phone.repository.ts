import { Dependencies, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersExistsPhoneAdaptor } from '../../domain/adapter/users.exists.phone.adaptor';
import { UsersExistsPhoneAdaptorInputDto } from '../../inbound/dtos/users.exists.phone.adaptor.input.dto';
import { UsersExistsPhoneAdaptorOutputDto } from '../../outbound/dtos/users.exists.phone.adaptor.output.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersExistsPhoneRepository implements UsersExistsPhoneAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async existsPhone(
    dto: UsersExistsPhoneAdaptorInputDto,
  ): Promise<UsersExistsPhoneAdaptorOutputDto> {
    const { phone } = dto;
    const user = await this.prisma.users.findUnique({ where: { phone } });

    return { response: { phone: !!user } };
  }
}
