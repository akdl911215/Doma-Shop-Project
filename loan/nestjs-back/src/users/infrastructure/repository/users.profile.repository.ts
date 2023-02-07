import { Dependencies, Injectable, NotFoundException } from "@nestjs/common";
import { UsersModel } from "../../domain/entity/users.model";
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { UsersProfileAdaptorOutputDto } from "../../outbound/dtos/users.profile.adaptor.output.dto";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";

@Injectable()
@Dependencies([PrismaService])
export class UsersProfileRepository implements UsersProfileAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async profile(dto: UsersModel): Promise<UsersProfileAdaptorOutputDto> {
    const { id } = dto;
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    return { response: user };
  }
}
