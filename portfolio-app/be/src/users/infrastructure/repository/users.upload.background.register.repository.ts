import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersUploadBackgroundRegisterAdaptor } from '../../domain/adapter/users.upload.background.register.adaptor';
import { UsersUploadBackgroundRegisterAdaptorInputDto } from '../../inbound/dtos/users.upload.background.register.adaptor.input.dto';
import { UsersUploadBackgroundRegisterAdaptorOutputDto } from '../../outbound/dtos/users.upload.background.register.adaptor.output.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersUploadBackgroundRegisterRepository
  implements UsersUploadBackgroundRegisterAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async register(
    dto: UsersUploadBackgroundRegisterAdaptorInputDto,
  ): Promise<UsersUploadBackgroundRegisterAdaptorOutputDto> {
    const {
      user: { id },
      fileLocation,
    } = dto;

    try {
      const [update] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: { backImage: fileLocation },
        }),
      ]);

      const { backImage } = update;
      return { response: { backImage } };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
