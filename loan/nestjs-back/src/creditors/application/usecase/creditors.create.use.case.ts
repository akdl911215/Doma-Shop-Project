import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { CreditorsCreateAdaptor } from "../../domain/adaptors/creditors.create.adaptor";
import { CreditorsCreateAdaptorOutputDto } from "../../outbound/dtos/adaptors/creditors.create.adaptor.output.dto";
import { CreditorsCreateAdaptorInputDto } from "../../inbound/dtos/adaptors/creditors.create.adaptor.input.dto";
import {
  CREDITOR_UNIQUE_ID_REQUIRED,
  CREDITORS_CONFIRMATION_ID,
} from "../../../_common/constants/http/errors/400";

@Injectable()
export class CreditorsCreateUseCase implements CreditorsCreateAdaptor {
  constructor(
    @Inject("CREATE") private readonly repository: CreditorsCreateAdaptor
  ) {}

  public create(
    dto: CreditorsCreateAdaptorInputDto
  ): Promise<CreditorsCreateAdaptorOutputDto> {
    const { creditorsUniqueIds, creditorsConfirmationId } = dto;

    // date 임시 로직
    const today = new Date();

    const year = today.getFullYear(); // 연
    const month = today.getMonth() + 1;
    const fullMonth = month < 10 ? `0${month}` : month; // 월

    const date = today.getDate();
    const fullDate = date < 10 ? `0${date}` : date; // 날짜

    const hours = today.getHours();
    const fullHours = hours < 10 ? `0${hours}` : hours; // 시

    const minutes = today.getMinutes();
    const fullMinutes = minutes < 10 ? `0${minutes}` : minutes; // 분

    const seconds = today.getSeconds(); // 초
    const fullSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const milliseconds = today.getMilliseconds(); // 밀리초

    const currentDate = `${year}${fullMonth}${fullDate}${fullHours}${fullMinutes}${fullSeconds}${milliseconds}`;
    console.log(currentDate);
    const creditorsConfirmationId: string = currentDate;

    if (!creditorsUniqueIds)
      throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);
    if (!creditorsConfirmationId)
      throw new BadRequestException(CREDITORS_CONFIRMATION_ID);

    return Promise.resolve(undefined);
  }
}
