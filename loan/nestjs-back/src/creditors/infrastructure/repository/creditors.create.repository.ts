import {
  BadRequestException,
  Dependencies,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { CreditorsCreateAdaptor } from "../../domain/adaptors/creditors.create.adaptor";
import { CreditorsCreateAdaptorInputDto } from "../../inbound/dtos/adaptors/creditors.create.adaptor.input.dto";
import { CreditorsCreateAdaptorOutputDto } from "../../outbound/dtos/adaptors/creditors.create.adaptor.output.dto";
import { CREDITOR_UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
@Dependencies([PrismaService])
export class CreditorsCreateRepository implements CreditorsCreateAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    dto: CreditorsCreateAdaptorInputDto
  ): Promise<CreditorsCreateAdaptorOutputDto> {
    const { creditorUniqueId, creditorsConfirmationId } = dto;

    if (!creditorUniqueId)
      throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);
    if (!creditorsConfirmationId)
      throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);

    try {
      const [createCreditors] = await this.prisma.$transaction([
        this.prisma.creditors.create({
          data: {
            creditorsUniqueId,
            creditorsConfirmationId,
          },
        }),
      ]);

      return { response: createCreditors };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
