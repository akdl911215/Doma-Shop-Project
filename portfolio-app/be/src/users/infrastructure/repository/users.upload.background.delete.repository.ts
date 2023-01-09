import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersUploadBackgroundDeleteAdaptor } from '../../domain/adapter/users.upload.background.delete.adaptor';
import { UsersUploadBackgroundDeleteAdaptorInputDto } from '../../inbound/dtos/users.upload.background.delete.adaptor.input.dto';
import { UsersUploadBackgroundDeleteAdaptorOutputDto } from '../../outbound/dtos/users.upload.background.delete.adaptor.output.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersUploadBackgroundDeleteRepository
  implements UsersUploadBackgroundDeleteAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async delete(
    dto: UsersUploadBackgroundDeleteAdaptorInputDto,
  ): Promise<UsersUploadBackgroundDeleteAdaptorOutputDto> {
    const { id } = dto;

    try {
      const [deleteUser] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: { backImage: null },
        }),
      ]);

      if (deleteUser.backImage === null) {
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
