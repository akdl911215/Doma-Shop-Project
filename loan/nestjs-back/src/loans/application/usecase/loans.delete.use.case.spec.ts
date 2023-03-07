import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansDeleteRepository } from "../../infrastructure/repository/loans.delete.repository";
import { LoansDeleteUseCase } from "./loans.delete.use.case";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.delete.adaptor.input.dto";

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
            message: "NO_MATCH_LOAN_ID",
            error: "Bad Request",
          });
        }
      }
    });

    it("debtor-id is empty and should fail", async () => {
      dto = {
        id: "f18b013c-4dc3-4c19-afb7-cab65b7cb694",
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
            message: "NO_MATCH_DEBTOR_ID",
            error: "Bad Request",
          });
        }
      }
    });

    it("creditor-id is empty and should fail", async () => {
      dto = {
        id: "f18b013c-4dc3-4c19-afb7-cab65b7cb694",
        debtorUniqueId: "56459675-ec2e-4d49-9790-bcbe436f1f91",
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
            message: "NO_MATCH_CREDITOR_ID",
            error: "Bad Request",
          });
        }
      }
    });

    it("loan-id is wrong and should fail", async () => {
      dto = {
        id: "f18b013c-4dc3-4c19-afb7-cab65b7cb611",
        debtorUniqueId: "56459675-ec2e-4d49-9790-bcbe436f1f91",
        creditorUniqueId: "65b2f2b3-93ed-4919-a3cf-41bc921d9c6e",
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
        id: "f18b013c-4dc3-4c19-afb7-cab65b7cb694",
        debtorUniqueId: "56459675-ec2e-4d49-9790-bcbe436f1f11",
        creditorUniqueId: "65b2f2b3-93ed-4919-a3cf-41bc921d9c6e",
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
            message: "NOTFOUND_DEBTOR",
            error: "Not Found",
          });
        }
      }
    });

    it("creditor-id is wrong and should fail", async () => {
      dto = {
        id: "f18b013c-4dc3-4c19-afb7-cab65b7cb694",
        debtorUniqueId: "56459675-ec2e-4d49-9790-bcbe436f1f91",
        creditorUniqueId: "65b2f2b3-93ed-4919-a3cf-41bc921d9c61",
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
            message: "NOTFOUND_CREDITOR",
            error: "Not Found",
          });
        }
      }
    });

    it("the essential information is different and should fail", async () => {
      dto = {
        id: "b12cbd05-f6fe-4d16-9483-672a9fffe6df",
        debtorUniqueId: "56459675-ec2e-4d49-9790-bcbe436f1f91",
        creditorUniqueId: "bf536402-bf96-43a6-8583-694871d4f140",
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

    // it("debtor is empty and should", async () => {
    //   dto = {
    //     debtor: "",
    //     debtorUniqueId: "",
    //     creditor: "testCreditor",
    //     creditorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
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
    //     debtorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     creditor: "testCreditor",
    //     creditorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
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
    //     debtorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     creditor: "testCreditor",
    //     creditorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
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
    //     debtorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     creditor: "testCreditor",
    //     creditorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
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
    //     debtorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
    //     creditor: "testCreditor",
    //     creditorUniqueId: "7b8fd669-674c-4f50-b9dd-f0100f160a6a",
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
    //     debtorUniqueId: "56459675-ec2e-4d49-9790-bcbe436f1f91",
    //     creditor: "bbbb",
    //     creditorUniqueId: "65b2f2b3-93ed-4919-a3cf-41bc921d9c6e",
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
    //     expect(response.debtorUniqueId).toStrictEqual(dto.debtorUniqueId);
    //     expect(response.creditor).toStrictEqual(dto.creditor);
    //     expect(response.creditorUniqueId).toStrictEqual(dto.creditorUniqueId);
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
