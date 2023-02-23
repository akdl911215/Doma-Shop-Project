import { ConflictException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersExistsUserIdAdaptor } from "../../domain/adaptor/users.exists.user.id.adaptor";
import { UsersExistsUserIdAdaptorInputDto } from "../../inbound/dtos/users.exists.user.id.adaptor.input.dto";
import { UsersExistsUserIdAdaptorOutputDto } from "../../outbound/dtos/users.exists.user.id.adaptor.output.dto";
import { ALREADY_USER_ID_EXISTS } from "../../../_common/constants/http/errors/409";

@Injectable()
@Dependencies([PrismaService])
export class UsersExistsUserIdRepository implements UsersExistsUserIdAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async existsUserId(
    dto: UsersExistsUserIdAdaptorInputDto
  ): Promise<UsersExistsUserIdAdaptorOutputDto> {
    const { userId } = dto;
    const user = await this.prisma.users.findUnique({ where: { userId } });
    if (!!user) throw new ConflictException(ALREADY_USER_ID_EXISTS);

    return { response: { validateUserId: !user } };
  }
}
