import { ConflictException, Dependencies, Injectable } from "@nestjs/common";
import { ALREADY_NICKNAME_EXISTS } from "../../../common/constants/http/errors/409";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersExistsNicknameAdaptor } from "../../domain/adaptor/users.exists.nickname.adaptor";
import { UsersExistsNicknameAdaptorInputDto } from "../../inbound/dtos/users.exists.nickname.adaptor.input.dto";
import { UsersExistsNicknameOutputDto } from "../../outbound/dtos/users.exists.nickname.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class UsersExistsNicknameRepository
  implements UsersExistsNicknameAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async existsNickname(
    dto: UsersExistsNicknameAdaptorInputDto
  ): Promise<UsersExistsNicknameOutputDto> {
    const { nickname } = dto;
    const user = await this.prisma.users.findUnique({ where: { nickname } });
    if (!!user) throw new ConflictException(ALREADY_NICKNAME_EXISTS);

    return { response: { validateNickname: !user } };
  }
}
