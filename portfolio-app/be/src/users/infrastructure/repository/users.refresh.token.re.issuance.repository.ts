import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersRefreshTokenReIssuanceAdaptor } from '../../domain/adapter/users.refresh.token.re.issuance.adaptor';
import { UsersRefreshTokenReIssuanceAdaptorInputDto } from '../../inbound/dtos/users.refresh.token.re.issuance.adaptor.input.dto';
import { UsersRefreshTokenReIssuanceAdaptorOutputDto } from '../../outbound/dtos/users.refresh.token.re.issuance.adaptor.output.dto';

@Injectable()
@Dependencies([PrismaService])
export class UsersRefreshTokenReIssuanceRepository
  implements UsersRefreshTokenReIssuanceAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async refresh(
    dto: UsersRefreshTokenReIssuanceAdaptorInputDto,
  ): Promise<UsersRefreshTokenReIssuanceAdaptorOutputDto> {
    const {
      user: { refreshToken, id },
    } = dto;

    try {
      const [updateRefreshTokenUser] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: { refreshToken },
        }),
      ]);
      return { response: updateRefreshTokenUser };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
