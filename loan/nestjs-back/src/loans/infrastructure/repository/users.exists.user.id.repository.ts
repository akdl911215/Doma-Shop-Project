import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersExistsUserIdInterface } from "../../domain/interfaces/users.exists.user.id.interface";
import { UsersExistsUserIdInterfaceInputDto } from "../../inbound/dtos/interfaces/users.exists.user.id.interface.input.dto";
import { UsersExistsUserIdInterfaceOutputDto } from "../../outbound/dtos/interfaces/users.exists.user.id.interface.output.dto";
import { USER_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
@Dependencies([PrismaService])
export class UsersExistsUserIdRepository implements UsersExistsUserIdInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async usersExistsFoundByUserId(
    dto: UsersExistsUserIdInterfaceInputDto
  ): Promise<UsersExistsUserIdInterfaceOutputDto> {
    const { userId } = dto;
    if (!userId) throw new BadRequestException(USER_ID_REQUIRED);

    const user = await this.prisma.users.findUnique({ where: { userId } });
    return { response: { usersExistsFoundByUserId: !!user } };
  }
}
