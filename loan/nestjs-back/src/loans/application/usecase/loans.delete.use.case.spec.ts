import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansDeleteRepository } from "../../infrastructure/repository/loans.delete.repository";
import { LoansDeleteUseCase } from "./loans.delete.use.case";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.delete.adaptor.input.dto";
import { LoansExistsLoanUniqueIdRepository } from "../../infrastructure/repository/loans.exists.loan.unique.id.repository";
import { LoansExistsLoanCreditorUniqueIdRepository } from "../../infrastructure/repository/loans.exists.loan.creditor.unique.id.repository";
import { LoansExistsLoanDebtorUniqueIdRepository } from "../../infrastructure/repository/loans.exists.loan.debtor.unique.id.repository";

describe("LoansDeleteUseCase", () => {
  let service: LoansDeleteUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoansDeleteUseCase,
        PrismaService,
        { provide: "DELETE", useClass: LoansDeleteRepository },
        {
          provide: "EXISTS_LOAN_UNIQUE_ID",
          useClass: LoansExistsLoanUniqueIdRepository,
        },
        {
          provide: "EXISTS_LOAN_CREDITOR_UNIQUE_ID",
          useClass: LoansExistsLoanCreditorUniqueIdRepository,
        },
        {
          provide: "EXISTS_LOAN_DEBTOR_UNIQUE_ID",
          useClass: LoansExistsLoanDebtorUniqueIdRepository,
        },
      ],
    }).compile();

    service = module.get<LoansDeleteUseCase>(LoansDeleteUseCase);
  });

  let dto: LoansDeleteAdaptorInputDto;

  describe("loan delete unit test", () => {
    it("loan-id is empty and should fail", async () => {
      dto = {
        id: "",
        debtorUniqueId: "",
        creditorUniqueId: "",
      };

      try {
        await service.delete(dto);
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

    it("loan unique id is invalid and should fail", async () => {
      dto = {
        id: "78a332e2-b287-48e6-9727-ee2e422653df",
        debtorUniqueId: "",
        creditorUniqueId: "",
      };

      try {
        await service.delete(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof NotFoundException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(404);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 404,
            message: "NOTFOUND_LOAN_UNIQUE_ID",
            error: "Not Found",
          });
        }
      }
    });

    it("debtor id is empty and should fail", async () => {
      dto = {
        id: "78a4a2e2-b287-48e6-9727-ee2e422653df",
        debtorUniqueId: "",
        creditorUniqueId: "",
      };

      try {
        await service.delete(dto);
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

    it("debtor id is invalid and should fail", async () => {
      dto = {
        id: "78a4a2e2-b287-48e6-9727-ee2e422653df",
        debtorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7a121",
        creditorUniqueId: "",
      };

      try {
        await service.delete(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof NotFoundException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(404);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 404,
            message: "NOTFOUND_LOAN_DEBTOR",
            error: "Not Found",
          });
        }
      }
    });

    it("creditor-id is empty and should fail", async () => {
      dto = {
        id: "78a4a2e2-b287-48e6-9727-ee2e422653df",
        debtorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        creditorUniqueId: "",
      };

      try {
        await service.delete(dto);
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

    it("creditor-id is invalid and should fail", async () => {
      dto = {
        id: "78a4a2e2-b287-48e6-9727-ee2e422653df",
        debtorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        creditorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7a22e",
      };

      try {
        await service.delete(dto);
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

    it("loan-id is wrong and should fail", async () => {
      dto = {
        id: "d44bacce-877c-434a-bc7a-c0c4a7589ce7",
        debtorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        creditorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7af6e",
      };

      try {
        await service.delete(dto);
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

    it("debtor-id is wrong and should fail", async () => {
      dto = {
        id: "78a4a2e2-b287-48e6-9727-ee2e422653df",
        debtorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7af12",
        creditorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7af6e",
      };

      try {
        await service.delete(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof NotFoundException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(404);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 404,
            message: "NOTFOUND_LOAN_DEBTOR",
            error: "Not Found",
          });
        }
      }
    });

    it("creditor-id is wrong and should fail", async () => {
      dto = {
        id: "78a4a2e2-b287-48e6-9727-ee2e422653df",
        debtorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        creditorUniqueId: "5ac63dad-1e52-4a29-8684-71135ae7af6e",
      };

      try {
        await service.delete(dto);
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

    it("success should loan delete", async () => {
      dto = {
        id: "78a4a2e2-b287-48e6-9727-ee2e422653df",
        debtorUniqueId: "c9f572eb-5d13-4af3-ba7a-d8ff44024d3c",
        creditorUniqueId: "5ac63dad-1e52-4a29-8684-72535ae7af6e",
      };

      try {
        const {
          response: { loanErase },
        } = await service.delete(dto);
        console.log(loanErase);

        expect(loanErase).toStrictEqual(true);
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
