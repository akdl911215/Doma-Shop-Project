import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansValidateRequiredLoanCreditorUniqueIdRepository } from "../../infrastructure/repository/loans.validate.required.loan.creditor.unique.id.repository";
import { LoansCreditorInquiryUseCase } from "./loans.creditor.inquiry.use.case";
import { LoansCreditorInquiryRepository } from "../../infrastructure/repository/loans.creditor.inquiry.repository";
import { LoansValidateRequiredLoanUniqueIdRepository } from "../../infrastructure/repository/loans.validate.required.loan.unique.id.repository";
import { LoansExistsLoanUniqueIdRepository } from "../../infrastructure/repository/loans.exists.loan.unique.id.repository";
import { LoansExistsLoanCreditorUniqueIdRepository } from "../../infrastructure/repository/loans.exists.loan.creditor.unique.id.repository";
import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.creditor.inquiry.adaptor.input.dto";

describe("LoansCreditorInquiryUseCase", () => {
  let service: LoansCreditorInquiryUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoansCreditorInquiryUseCase,
        PrismaService,
        {
          provide: "CREDITOR_INQUIRY",
          useClass: LoansCreditorInquiryRepository,
        },
        {
          provide: "VALIDATE_REQUIRED_LOAN_UNIQUE_ID",
          useClass: LoansValidateRequiredLoanUniqueIdRepository,
        },
        {
          provide: "EXISTS_LOAN_UNIQUE_ID",
          useClass: LoansExistsLoanUniqueIdRepository,
        },
        {
          provide: "VALIDATE_REQUIRED_LOAN_CREDITOR_UNIQUE_ID",
          useClass: LoansValidateRequiredLoanCreditorUniqueIdRepository,
        },
        {
          provide: "EXISTS_LOAN_CREDITOR_UNIQUE_ID",
          useClass: LoansExistsLoanCreditorUniqueIdRepository,
        },
      ],
    }).compile();

    service = module.get<LoansCreditorInquiryUseCase>(
      LoansCreditorInquiryUseCase
    );
  });

  let dto: LoansCreditorInquiryAdaptorInputDto;

  describe("loan creditor unit-testing unit test", () => {
    it("unique id is empty and must fail", async () => {
      dto = {
        id: "",
        creditorUniqueId: "",
      };

      try {
        await service.creditorInquiry(dto);
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

    it("creditor unique id is empty and must fail", async () => {
      dto = {
        id: "d44bacce-877c-434a-bc7a-c0c4a7589ce7",
        creditorUniqueId: "",
      };

      try {
        await service.creditorInquiry(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "CREDITOR_UNIQUE_ID_REQUIRED",
            error: "Bad Request",
          });
        }
      }
    });

    it("unique id and creditor unique id mismatch and must fail", async () => {
      dto = {
        id: "d44bacce-877c-434a-bc7a-c0c4a7589ce7",
        creditorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
      };

      try {
        await service.creditorInquiry(dto);
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
        creditorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7af6e",
      };

      try {
        const { response } = await service.creditorInquiry(dto);
        console.log(response);

        expect(response.creditorUniqueId).toStrictEqual(dto.creditorUniqueId);
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
