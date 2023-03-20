import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersExistsUserInterface } from "../../domain/interfaces/users.exists.user.interface";
import { UsersExistsUserInterfaceInputDto } from "../../inbound/dtos/interfaces/users.exists.user.interface.input.dto";
import { UsersExistsUserInterfaceOutputDto } from "../../outbound/dtos/interfaces/users.exists.user.interface.output.dto";
import {
  UNIQUE_ID_REQUIRED,
  USER_ID_REQUIRED,
} from "../../../_common/constants/http/errors/400";

@Injectable()
@Dependencies([PrismaService])
export class UsersExistsUserRepository implements UsersExistsUserInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async existsUser(
    dto: UsersExistsUserInterfaceInputDto
  ): Promise<UsersExistsUserInterfaceOutputDto> {
    const { id, userId } = dto;

    if (!id) throw new BadRequestException(UNIQUE_ID_REQUIRED);
    if (!userId) throw new BadRequestException(USER_ID_REQUIRED);

    const searchDB = await this.prisma.users.findFirst({
      where: {
        AND: [{ id }, { userId }],
      },
    });

    return { response: { existsUser: !!searchDB } };
  }
}
