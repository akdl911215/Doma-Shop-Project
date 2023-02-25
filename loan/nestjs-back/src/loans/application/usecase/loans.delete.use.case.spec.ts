import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansDeleteRepository } from "../../infrastructure/repository/loans.delete.repository";
import { LoansDeleteUseCase } from "./loans.delete.use.case";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/loans.delete.adaptor.input.dto";

describe("LoansDeleteUseCase", () => {
  let service: LoansDeleteUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoansDeleteUseCase,
        PrismaService,
        { provide: "DELETE", useClass: LoansDeleteRepository },
      ],
    }).compile();

    service = module.get<LoansDeleteUseCase>(LoansDeleteUseCase);
  });

  let dto: LoansDeleteAdaptorInputDto;

  describe("loan delete unit test", () => {
    it("creditor is empty and should", async () => {
      dto = {
        id: "",
        debtorId: "",
        creditorId: "",
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
            message: "CONFIRM_REQUIRED_CREDITOR_INFORMATION",
            error: "Bad Request",
          });
        }
      }
    });

    // it("debtor is empty and should", async () => {
    //   dto = {
    //     debtor: "",
    //     debtorId: "",
    //     creditor: "testCreditor",
    //     creditorId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     totalAmountLoan: 0,
    //     loanRepaymentDate: "",
    //     interest: 0,
    //   };
    //
    //   try {
    //     await service.create(dto);
    //   } catch (e) {
    //     console.log(e);
    //
    //     if (e instanceof BadRequestException) {
    //       const status = e.getStatus();
    //       expect(status).toStrictEqual(400);
    //
    //       const errorMessage = e.getResponse();
    //       console.log(errorMessage);
    //       expect(errorMessage).toStrictEqual({
    //         statusCode: 400,
    //         message: "CONFIRM_REQUIRED_DEBTOR_INFORMATION",
    //         error: "Bad Request",
    //       });
    //     }
    //   }
    // });
    //
    // it("total amount loan required", async () => {
    //   dto = {
    //     debtor: "testDebtor",
    //     debtorId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     creditor: "testCreditor",
    //     creditorId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     totalAmountLoan: 0,
    //     loanRepaymentDate: "",
    //     interest: 0,
    //   };
    //
    //   try {
    //     await service.create(dto);
    //   } catch (e) {
    //     console.log(e);
    //
    //     if (e instanceof BadRequestException) {
    //       const status = e.getStatus();
    //       expect(status).toStrictEqual(400);
    //
    //       const errorMessage = e.getResponse();
    //       console.log(errorMessage);
    //       expect(errorMessage).toStrictEqual({
    //         statusCode: 400,
    //         message: "CONFIRM_REQUIRED_LOAN_INFORMATION",
    //         error: "Bad Request",
    //       });
    //     }
    //   }
    // });
    //
    // it("loan repayment date required", async () => {
    //   dto = {
    //     debtor: "testDebtor",
    //     debtorId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     creditor: "testCreditor",
    //     creditorId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     totalAmountLoan: 1000000000,
    //     loanRepaymentDate: "2030-12-31",
    //     interest: 0,
    //   };
    //
    //   try {
    //     await service.create(dto);
    //   } catch (e) {
    //     console.log(e);
    //
    //     if (e instanceof BadRequestException) {
    //       const status = e.getStatus();
    //       expect(status).toStrictEqual(400);
    //
    //       const errorMessage = e.getResponse();
    //       console.log(errorMessage);
    //       expect(errorMessage).toStrictEqual({
    //         statusCode: 400,
    //         message: "CONFIRM_REQUIRED_LOAN_REPAYMENT_DATE_INFORMATION",
    //         error: "Bad Request",
    //       });
    //     }
    //   }
    // });
    //
    // it("loan interest required", async () => {
    //   dto = {
    //     debtor: "testDebtor",
    //     debtorId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     creditor: "testCreditor",
    //     creditorId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     totalAmountLoan: 1000000000,
    //     loanRepaymentDate: "2030-12-31",
    //     interest: 0,
    //   };
    //
    //   try {
    //     await service.create(dto);
    //   } catch (e) {
    //     console.log(e);
    //
    //     if (e instanceof BadRequestException) {
    //       const status = e.getStatus();
    //       expect(status).toStrictEqual(400);
    //
    //       const errorMessage = e.getResponse();
    //       console.log(errorMessage);
    //       expect(errorMessage).toStrictEqual({
    //         statusCode: 400,
    //         message: "CONFIRM_REQUIRED_LOAN_INTEREST_INFORMATION",
    //         error: "Bad Request",
    //       });
    //     }
    //   }
    // });
    //
    // it("the creditor and debtor is information is wrong", async () => {
    //   dto = {
    //     debtor: "testDebtor",
    //     debtorId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     creditor: "testCreditor",
    //     creditorId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     totalAmountLoan: 1000000000,
    //     loanRepaymentDate: "2030-12-31",
    //     interest: 10,
    //   };
    //
    //   try {
    //     await service.create(dto);
    //   } catch (e) {
    //     console.log(e);
    //
    //     if (e instanceof NotFoundException) {
    //       const status = e.getStatus();
    //       expect(status).toStrictEqual(404);
    //
    //       const errorMessage = e.getResponse();
    //       console.log(errorMessage);
    //       expect(errorMessage).toStrictEqual({
    //         statusCode: 404,
    //         message: "NOTFOUND_USER",
    //         error: "Not Found",
    //       });
    //     }
    //   }
    // });
    //
    // it("success should boards register", async () => {
    //   dto = {
    //     debtor: "aaa",
    //     debtorId: "56459675-ec2e-4d49-9790-bcbe436f1f91",
    //     creditor: "bbbb",
    //     creditorId: "65b2f2b3-93ed-4919-a3cf-41bc921d9c6e",
    //     totalAmountLoan: 2000000000,
    //     loanRepaymentDate: "2030-12-31",
    //     interest: 10,
    //   };
    //
    //   try {
    //     const { response } = await service.create(dto);
    //     console.log(response);
    //
    //     expect(response.debtor).toStrictEqual(dto.debtor);
    //     expect(response.debtorId).toStrictEqual(dto.debtorId);
    //     expect(response.creditor).toStrictEqual(dto.creditor);
    //     expect(response.creditorId).toStrictEqual(dto.creditorId);
    //     expect(response.totalAmountLoan).toStrictEqual(dto.totalAmountLoan);
    //     expect(response.loanRepaymentDate).toStrictEqual(dto.loanRepaymentDate);
    //     expect(response.interest).toStrictEqual(dto.interest);
    //   } catch (e) {
    //     console.error(e);
    //     throw new Error(`${e}`);
    //   }
    // });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
