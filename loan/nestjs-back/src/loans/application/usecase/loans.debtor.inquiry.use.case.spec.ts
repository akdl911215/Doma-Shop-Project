import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanUniqueIdRepository } from "../../infrastructure/repository/loans.exists.loan.unique.id.repository";
import { LoansDebtorInquiryUseCase } from "./loans.debtor.inquiry.use.case";
import { LoansExistsLoanDebtorUniqueIdRepository } from "../../infrastructure/repository/loans.exists.loan.debtor.unique.id.repository";
import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryRepository } from "../../infrastructure/repository/loans.debtor.inquiry.repository";

describe("LoansDebtorInquiryUseCase", () => {
  let service: LoansDebtorInquiryUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoansDebtorInquiryUseCase,
        PrismaService,
        {
          provide: "DEBTOR_INQUIRY",
          useClass: LoansDebtorInquiryRepository,
        },
        {
          provide: "EXISTS_LOAN_UNIQUE_ID",
          useClass: LoansExistsLoanUniqueIdRepository,
        },
        {
          provide: "EXISTS_LOAN_DEBTOR_UNIQUE_ID",
          useClass: LoansExistsLoanDebtorUniqueIdRepository,
        },
      ],
    }).compile();

    service = module.get<LoansDebtorInquiryUseCase>(LoansDebtorInquiryUseCase);
  });

  let dto: LoansDebtorInquiryAdaptorInputDto;

  describe("loan debtor unit-testing unit test", () => {
    it("unique id is empty and must fail", async () => {
      dto = {
        id: "",
        debtorUniqueId: "",
      };

      try {
        await service.debtorInquiry(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "UNIQUE_ID_REQUIRED",
            error: "Bad Request",
          });
        }
      }
    });

    it("debtor unique id is empty and must fail", async () => {
      dto = {
        id: "d44bacce-877c-434a-bc7a-c0c4a7589ce7",
        debtorUniqueId: "",
      };

      try {
        await service.debtorInquiry(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "DEBTOR_UNIQUE_ID_REQUIRED",
            error: "Bad Request",
          });
        }
      }
    });

    it("unique id and debtor unique id mismatch and must fail", async () => {
      dto = {
        id: "d44bacce-877c-434a-bc7a-c0c4a7589ce7",
        debtorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7af6e",
      };

      try {
        await service.debtorInquiry(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof NotFoundException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(404);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 404,
            message: "NOTFOUND_LOAN",
            error: "Not Found",
          });
        }
      }
    });

    it("success should loan inquiry create", async () => {
      dto = {
        id: "d44bacce-877c-434a-bc7a-c0c4a7589ce7",
        debtorUniqueId: "3a94252c-3b7a-4449-9b67-7e5acb6c228d",
      };

      try {
        const { response } = await service.debtorInquiry(dto);
        console.log(response);

        expect(response.debtorUniqueId).toStrictEqual(dto.debtorUniqueId);
        expect(response.id).toStrictEqual(dto.id);
      } catch (e) {
        console.error(e);
        throw new Error(`${e}`);
      }
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
