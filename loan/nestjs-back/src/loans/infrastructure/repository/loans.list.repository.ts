import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansListAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.list.adaptor.output.dto";
import { LoansListAdaptor } from "../../domain/adaptors/loans.list.adaptor";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.list.adaptor.input.dto";
import { Loans } from "@prisma/client";
import { NOTFOUND_LIST } from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansListRepository implements LoansListAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async list(
    dto: LoansListAdaptorInputDto
  ): Promise<LoansListAdaptorOutputDto> {
    const { page, take } = dto;

    const list: number = await this.prisma.loans.count();
    if (!list) throw new NotFoundException(NOTFOUND_LIST);

    const currentPage: number = page < 1 ? 1 : page;
    const skip = (currentPage - 1) * take;
    const variableTake: number = take < 1 ? 1 : take;
    const resultTotalPage: number = Math.ceil(list / variableTake);
    const lastPageLeft: number = Math.ceil(resultTotalPage - (skip + 1));
    const resultLastPageLeft: number = lastPageLeft < 1 ? 1 : lastPageLeft;
    const currentList: Loans[] = await this.prisma.loans.findMany({
      skip,
      take: variableTake,
    });

    try {
      return {
        response: {
          currentPage,
          resultLastPageLeft,
          resultTotalPage,
          currentList,
        },
      };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
