import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersUploadProfileDeleteAdaptor } from '../../domain/adapter/users.upload.profile.delete.adaptor';
import { UsersUploadProfileDeleteAdaptorInputDto } from '../../inbound/dtos/users.upload.profile.delete.adaptor.input.dto';
import { UsersUploadProfileDeleteAdaptorOutputDto } from '../../outbound/dtos/users.upload.profile.delete.adaptor.output.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersUploadProfileDeleteRepository
  implements UsersUploadProfileDeleteAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async delete(
    dto: UsersUploadProfileDeleteAdaptorInputDto,
  ): Promise<UsersUploadProfileDeleteAdaptorOutputDto> {
    const { id } = dto;

    try {
      const [deleteUser] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: { profileImage: null },
        }),
      ]);

      if (deleteUser.profileImage === null) {
        return { response: { delete: true } };
      } else {
        return { response: { delete: false } };
      }
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
