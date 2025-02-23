import { Dependencies, Injectable, NotFoundException } from "@nestjs/common";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { UsersFindByIdAdaptorOutputDto } from "../../outbound/dtos/users.find.by.id.adaptor.output.dto";
import { UsersFindByIdAdaptorInputDto } from "../../inbound/dtos/users.find.by.id.adaptor.input.dto";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersFindByIdInterface } from "../../../_common/infrastructures/token/interface/users.find.by.id.interface";

@Injectable()
@Dependencies([PrismaService])
export class UsersFindByIdRepository implements UsersFindByIdInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async usersFindById({
    id,
  }: UsersFindByIdAdaptorInputDto): Promise<UsersFindByIdAdaptorOutputDto> {
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    return { response: user };
  }
}
