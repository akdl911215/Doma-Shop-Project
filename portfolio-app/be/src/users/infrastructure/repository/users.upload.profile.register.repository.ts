import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersUploadProfileRegisterAdaptor } from '../../domain/adapter/users.upload.profile.register.adaptor';
import { UsersUploadProfileRegisterAdaptorInputDto } from '../../inbound/dtos/users.upload.profile.register.adaptor.input.dto';
import { UsersUploadProfileRegisterAdaptorOutputDto } from '../../outbound/dtos/users.upload.profile.register.adaptor.output.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersUploadProfileRegisterRepository
  implements UsersUploadProfileRegisterAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async register(
    dto: UsersUploadProfileRegisterAdaptorInputDto,
  ): Promise<UsersUploadProfileRegisterAdaptorOutputDto> {
    const {
      user: { id },
      fileLocation,
    } = dto;

    try {
      const [update] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: { profileImage: fileLocation },
        }),
      ]);

      const { profileImage } = update;
      return { response: { profileImage } };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
