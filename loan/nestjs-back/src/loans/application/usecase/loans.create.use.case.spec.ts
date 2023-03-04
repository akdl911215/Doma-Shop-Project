import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansCreateRepository } from "../../infrastructure/repository/loans.create.repository";
import { LoansCreateUseCase } from "./loans.create.use.case";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.create.adaptor.input.dto";

describe("LoansCreateUseCase", () => {
  let service: LoansCreateUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoansCreateUseCase,
        PrismaService,
        { provide: "CREATE", useClass: LoansCreateRepository },
      ],
    }).compile();

    service = module.get<LoansCreateUseCase>(LoansCreateUseCase);
  });

  let dto: LoansCreateAdaptorInputDto;

  describe("loan create unit test", () => {
    it("creditor is empty and should", async () => {
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
            message: "CONFIRM_REQUIRED_CREDITOR_INFORMATION",
            error: "Bad Request",
          });
        }
      }
    });

    it("debtor is empty and should", async () => {
      dto = {
        debtorId: "",
        debtorUniqueId: "",
        creditorId: "testCreditor",
        creditorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
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
            message: "CONFIRM_REQUIRED_DEBTOR_INFORMATION",
            error: "Bad Request",
          });
        }
      }
    });

    it("total amount loan required", async () => {
      dto = {
        debtorId: "testDebtor",
        debtorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
        creditorId: "testCreditor",
        creditorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
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
            message: "CONFIRM_REQUIRED_LOAN_INFORMATION",
            error: "Bad Request",
          });
        }
      }
    });

    it("loan repayment date required", async () => {
      dto = {
        debtorId: "testDebtor",
        debtorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
        creditorId: "testCreditor",
        creditorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
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
            message: "CONFIRM_REQUIRED_LOAN_REPAYMENT_DATE_INFORMATION",
            error: "Bad Request",
          });
        }
      }
    });

    it("loan interest required", async () => {
      dto = {
        debtorId: "testDebtor",
        debtorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
        creditorId: "testCreditor",
        creditorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
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
            message: "CONFIRM_REQUIRED_LOAN_INTEREST_INFORMATION",
            error: "Bad Request",
          });
        }
      }
    });

    it("the creditor and debtor is information is wrong", async () => {
      dto = {
        debtorId: "testDebtor",
        debtorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
        creditorId: "testCreditor",
        creditorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
        totalAmountLoan: 1000000000,
        loanRepaymentDate: "2030-12-31",
        interest: 10,
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
            message: "NOTFOUND_USER",
            error: "Not Found",
          });
        }
      }
    });

    it("success should loan create", async () => {
      dto = {
        debtorId: "aaa",
        debtorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        creditorId: "bbb",
        creditorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7af6e",
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
