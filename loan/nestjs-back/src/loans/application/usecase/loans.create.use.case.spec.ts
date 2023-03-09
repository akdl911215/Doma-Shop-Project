import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansCreateRepository } from "../../infrastructure/repository/loans.create.repository";
import { LoansCreateUseCase } from "./loans.create.use.case";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.create.adaptor.input.dto";
import { UsersExistsUniqueIdRepository } from "../../infrastructure/repository/users.exists.unique.id.repository";
import { UsersExistsUserIdRepository } from "../../infrastructure/repository/users.exists.user.id.repository";
import { UsersExistsUserRepository } from "../../infrastructure/repository/users.exists.user.repository";

describe("LoansCreateUseCase", () => {
  let service: LoansCreateUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoansCreateUseCase,
        PrismaService,
        { provide: "CREATE", useClass: LoansCreateRepository },
        {
          provide: "USERS_EXISTS_FOUND_BY_USER",
          useClass: UsersExistsUserRepository,
        },
      ],
    }).compile();

    service = module.get<LoansCreateUseCase>(LoansCreateUseCase);
  });

  let dto: LoansCreateAdaptorInputDto;

  describe("loan create unit test", () => {
    it("creditor id is empty and failed", async () => {
      dto = {
        debtorId: "",
        debtorUniqueId: "",
        creditorId: "",
        creditorUniqueId: "",
        totalAmountLoan: 0,
        loanRepaymentDate: "",
        interest: 0,
      };

      try {
        await service.create(dto);
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

    it("creditor unique id is empty and failed", async () => {
      dto = {
        debtorId: "",
        debtorUniqueId: "",
        creditorId: "testCreditor",
        creditorUniqueId: "",
        totalAmountLoan: 0,
        loanRepaymentDate: "",
        interest: 0,
      };

      try {
        await service.create(dto);
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

    it("creditor unique id and id is no match and failed", async () => {
      dto = {
        debtorId: "",
        debtorUniqueId: "",
        creditorId: "aaadd",
        creditorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7a123",
        totalAmountLoan: 0,
        loanRepaymentDate: "",
        interest: 0,
      };

      try {
        await service.create(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof NotFoundException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(404);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 404,
            message: "NOTFOUND_LOAN_CREDITOR",
            error: "Not Found",
          });
        }
      }
    });

    it("debtor id is empty and should", async () => {
      dto = {
        debtorId: "",
        debtorUniqueId: "",
        creditorId: "aaa",
        creditorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        totalAmountLoan: 0,
        loanRepaymentDate: "",
        interest: 0,
      };

      try {
        await service.create(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "DEBTOR_ID_REQUIRED",
            error: "Bad Request",
          });
        }
      }
    });

    it("debtor unique id is empty and filed", async () => {
      dto = {
        debtorId: "testDebtor",
        debtorUniqueId: "",
        creditorId: "aaa",
        creditorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        totalAmountLoan: 0,
        loanRepaymentDate: "",
        interest: 0,
      };

      try {
        await service.create(dto);
      } catch (e) {
        console.log("eee", e);

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

    it("total amount loan required", async () => {
      dto = {
        debtorId: "bbb",
        debtorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7af6e",
        creditorId: "aaa",
        creditorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        totalAmountLoan: 0,
        loanRepaymentDate: "",
        interest: 0,
      };

      try {
        await service.create(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "LOAN_TOTAL_AMOUNT_REQUIRED",
            error: "Bad Request",
          });
        }
      }
    });

    it("loan interest required and failed", async () => {
      dto = {
        debtorId: "bbb",
        debtorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7af6e",
        creditorId: "aaa",
        creditorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        totalAmountLoan: 1000000000,
        loanRepaymentDate: "2030-12-31",
        interest: 0,
      };

      try {
        await service.create(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "LOAN_INTEREST",
            error: "Bad Request",
          });
        }
      }
    });

    it("success should loan create", async () => {
      dto = {
        debtorId: "bbb",
        debtorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7af6e",
        creditorId: "aaa",
        creditorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        totalAmountLoan: 2000000000,
        loanRepaymentDate: "2030-12-31",
        interest: 10,
      };

      try {
        const { response } = await service.create(dto);
        console.log(response);

        expect(response.debtorId).toStrictEqual(dto.debtorId);
        expect(response.debtorUniqueId).toStrictEqual(dto.debtorUniqueId);
        expect(response.creditorId).toStrictEqual(dto.creditorId);
        expect(response.creditorUniqueId).toStrictEqual(dto.creditorUniqueId);
        expect(response.totalAmountLoan).toStrictEqual(dto.totalAmountLoan);
        expect(response.loanRepaymentDate).toStrictEqual(dto.loanRepaymentDate);
        expect(response.interest).toStrictEqual(dto.interest);
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
