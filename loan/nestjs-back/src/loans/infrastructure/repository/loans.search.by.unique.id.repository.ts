import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansSearchByUniqueIdInterfaceInputDto } from "../../inbound/dtos/interfaces/loans.search.by.unique.id.interface.input.dto";
import { LoansSearchByUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interfaces/loans.search.by.unique.id.interface.output.dto";
import { UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";
import { LoansSearchByUniqueIdInterface } from "../../domain/interfaces/loans.search.by.unique.id.interface";

@Injectable()
@Dependencies([PrismaService])
export class LoansSearchByUniqueIdRepository
  implements LoansSearchByUniqueIdInterface
{
  constructor(private readonly prisma: PrismaService) {}

  public async searchByUniqueId(
    dto: LoansSearchByUniqueIdInterfaceInputDto
  ): Promise<LoansSearchByUniqueIdInterfaceOutputDto> {
    const { id } = dto;
    if (!id) throw new BadRequestException(UNIQUE_ID_REQUIRED);

    const loan = await this.prisma.loans.findFirst({
      where: {
        id,
      },
    });

    return { response: loan };
  }
}
