import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersExistsUniqueIdInterface } from "../../domain/interfaces/users.exists.unique.id.interface";
import { UsersExistsUniqueIdInterfaceInputDto } from "../../inbound/dtos/interfaces/users.exists.unique.id.interface.input.dto";
import { UsersExistsUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interfaces/users.exists.unique.id.interface.output.dto";
import { UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
@Dependencies([PrismaService])
export class UsersExistsUniqueIdRepository
  implements UsersExistsUniqueIdInterface
{
  constructor(private readonly prisma: PrismaService) {}

  public async usersExistsFoundByUniqueId(
    dto: UsersExistsUniqueIdInterfaceInputDto
  ): Promise<UsersExistsUniqueIdInterfaceOutputDto> {
    const { id } = dto;
    if (!id) throw new BadRequestException(UNIQUE_ID_REQUIRED);

    const user = await this.prisma.users.findUnique({ where: { id } });

    return { response: { userExistsFoundByUniqueId: !!user } };
  }
}
