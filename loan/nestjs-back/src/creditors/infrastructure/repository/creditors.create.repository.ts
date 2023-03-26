import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { CreditorsCreateAdaptor } from "../../domain/adaptors/creditors.create.adaptor";
import { CreditorsCreateAdaptorInputDto } from "../../inbound/dtos/adaptors/creditors.create.adaptor.input.dto";
import { CreditorsCreateAdaptorOutputDto } from "../../outbound/dtos/adaptors/creditors.create.adaptor.output.dto";
import { Creditors } from "@prisma/client";

@Injectable()
@Dependencies([PrismaService])
export class CreditorsCreateRepository implements CreditorsCreateAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    dto: CreditorsCreateAdaptorInputDto
  ): Promise<CreditorsCreateAdaptorOutputDto> {
    const { creditorsUniqueIds, creditorsConfirmationId } = dto;

    try {
      const returnArr: Creditors[] = [];
      for (let i = 0; i < creditorsUniqueIds.length; ++i) {
        const [createCreditors] = await this.prisma.$transaction([
          this.prisma.creditors.create({
            data: {
              creditorsUniqueId: creditorsUniqueIds[i],
              creditorsConfirmationId,
            },
          }),
        ]);
        returnArr.push(createCreditors);
      }

      return { response: { creditorsList: returnArr } };
    } catch (e) {
      const [deleteCreditors] = await this.prisma.$transaction([
        this.prisma.creditors.deleteMany({
          where: {
            creditorsConfirmationId,
          },
        }),
      ]);

      if (!!deleteCreditors) {
        if (e instanceof InternalServerErrorException) {
          throw new InternalServerErrorException(e);
        } else {
          throw new Error(`${e}`);
        }
      } else {
        throw new Error("DELETE FAILS AND ERROR ", e);
      }
    }
  }
}
