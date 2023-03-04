import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansListAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.list.adaptor.output.dto";
import { LoansListAdaptor } from "../../domain/adaptor/loans.list.adaptor";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.list.adaptor.input.dto";
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
    const resultPage: number = Math.round(list / variableTake);
    const totalPage: number = Math.round(resultPage - (skip + 1));
    const resultTotalPage: number = totalPage < 1 ? 1 : totalPage;
    const currentList: Loans[] = await this.prisma.loans.findMany({
      skip,
      take: variableTake,
    });

    try {
      return {
        response: {
          resultPage,
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
