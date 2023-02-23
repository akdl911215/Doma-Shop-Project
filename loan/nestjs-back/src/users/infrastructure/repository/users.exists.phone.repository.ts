import { ConflictException, Dependencies, Injectable } from "@nestjs/common";
import { ALREADY_PHONE_EXISTS } from "../../../_common/constants/http/errors/409";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersExistsPhoneAdaptor } from "../../domain/adaptor/users.exists.phone.adaptor";
import { UsersExistsPhoneAdaptorInputDto } from "../../inbound/dtos/users.exists.phone.adaptor.input.dto";
import { UsersExistsPhoneAdaptorOutputDto } from "../../outbound/dtos/users.exists.phone.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class UsersExistsPhoneRepository implements UsersExistsPhoneAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async existsPhone(
    dto: UsersExistsPhoneAdaptorInputDto
  ): Promise<UsersExistsPhoneAdaptorOutputDto> {
    const { phone } = dto;
    const user = await this.prisma.users.findUnique({ where: { phone } });
    if (!!user) throw new ConflictException(ALREADY_PHONE_EXISTS);

    return { response: { validatePhone: !user } };
  }
}
