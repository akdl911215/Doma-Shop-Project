import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreditorsCreateAdaptor } from "../../domain/adaptors/creditors.create.adaptor";
import { CreditorsCreateAdaptorOutputDto } from "../../outbound/dtos/adaptors/creditors.create.adaptor.output.dto";
import { CreditorsCreateAdaptorInputDto } from "../../inbound/dtos/adaptors/creditors.create.adaptor.input.dto";
import {
  CREDITOR_UNIQUE_ID_REQUIRED,
  CREDITORS_CONFIRMATION_ID,
} from "../../../_common/constants/http/errors/400";
import { UsersExistsUniqueIdInterface } from "../../domain/interfaces/users.exists.unique.id.interface";

@Injectable()
export class CreditorsCreateUseCase implements CreditorsCreateAdaptor {
  constructor(
    @Inject("CREATE") private readonly repository: CreditorsCreateAdaptor,
    @Inject("USERS_EXISTS_FOUND_BY_ID")
    private readonly checkPresenceDB: UsersExistsUniqueIdInterface
  ) {}

  public async create(
    dto: CreditorsCreateAdaptorInputDto
  ): Promise<CreditorsCreateAdaptorOutputDto> {
    const { creditorsUniqueIds } = dto;
    // creditorsConfirmationId

    const creditorsConfirmationId: number = Date.now();

    for (let i = 0; i < creditorsUniqueIds.length; ++i) {
      const {
        response: { userExistsFoundByUniqueId },
      } = await this.checkPresenceDB.usersExistsFoundByUniqueId({
        id: creditorsUniqueIds[i],
      });

      if (!userExistsFoundByUniqueId)
        throw new NotFoundException(
          `${creditorsUniqueIds[i]} ${CREDITOR_UNIQUE_ID_REQUIRED}`
        );
    }

    if (creditorsConfirmationId.toString().length < 13)
      throw new BadRequestException(CREDITORS_CONFIRMATION_ID);

    return await this.repository.create({
      creditorsUniqueIds,
      creditorsConfirmationId,
    });
  }
}
