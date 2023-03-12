import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansUpdateUseCase } from "./loans.update.use.case";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.update.adaptor.input.dto";
import { LoansExistsLoanUniqueIdRepository } from "../../infrastructure/repository/loans.exists.loan.unique.id.repository";
import { LoansSearchByUniqueIdRepository } from "../../infrastructure/repository/loans.search.by.unique.id.repository";
import { LoansUpdateRepository } from "../../infrastructure/repository/loans.update.repository";

describe("LoansUpdateUseCase", () => {
  let service: LoansUpdateUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoansUpdateUseCase,
        PrismaService,
        { provide: "UPDATE", useClass: LoansUpdateRepository },
        {
          provide: "EXISTS_LOAN",
          useClass: LoansExistsLoanUniqueIdRepository,
        },
        {
          provide: "SEARCH_UNIQUE_ID",
          useClass: LoansSearchByUniqueIdRepository,
        },
      ],
    }).compile();

    service = module.get<LoansUpdateUseCase>(LoansUpdateUseCase);
  });

  let dto: LoansUpdateAdaptorInputDto;

  describe("loan update unit test", () => {
    it("loan unique id is empty and failed", async () => {
      dto = {
        id: "",
        debtorId: "",
        debtorUniqueId: "",
        creditorId: [""],
        creditorUniqueId: [""],
        totalAmountLoan: 0,
        loanRepaymentDate: "",
        interest: 0,
      };

      try {
        await service.update(dto);
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

    it("loan unique id is invalid and failed", async () => {
      dto = {
        id: "d44bacce-877c-434a-bc7a-c0c4a7589c22",
        debtorId: "",
        debtorUniqueId: "",
        creditorId: [""],
        creditorUniqueId: [""],
        totalAmountLoan: 0,
        loanRepaymentDate: "",
        interest: 0,
      };

      try {
        await service.update(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "LOAN_UNIQUE_ID_REQUIRED",
            error: "Bad Request",
          });
        }
      }
    });

    it("success should loan update", async () => {
      dto = {
        id: "d44bacce-877c-434a-bc7a-c0c4a7589ce7",
        debtorId: "",
        debtorUniqueId: "",
        creditorId: [""],
        creditorUniqueId: [""],
        totalAmountLoan: 0,
        loanRepaymentDate: "",
        interest: 0,
      };

      try {
        const { response } = await service.update(dto);
        console.log("response : ", response);

        expect(response.id).toStrictEqual(dto.id);
        // expect(response.debtorId).toStrictEqual(dto.debtorId);
        // expect(response.debtorUniqueId).toStrictEqual(dto.debtorUniqueId);
        // expect(response.creditorId).toStrictEqual(dto.creditorId);
        // expect(response.creditorUniqueId).toStrictEqual(dto.creditorUniqueId);
        // expect(response.totalAmountLoan).toStrictEqual(dto.totalAmountLoan);
        // expect(response.loanRepaymentDate).toStrictEqual(dto.loanRepaymentDate);
        // expect(response.interest).toStrictEqual(dto.interest);
      } catch (e) {
        console.log(e);

        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "CREDITOR_ID_REQUIRED",
            error: "Bad Request",
          });
        }
      }
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
