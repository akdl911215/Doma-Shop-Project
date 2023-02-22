import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException } from "@nestjs/common";
import { UsersModel } from "../../../users/domain/entity/users.model";
import { LoanCreateUseCase } from "./loan.create.use.case";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { LoanCreateRepository } from "../../infrastructure/repository/loan.create.repository";
import { LoanCreateAdaptorInputDto } from "../../inbound/dtos/loan.create.adaptor.input.dto";

describe("LoanCreateUseCase", () => {
  let service: LoanCreateUseCase;
  let usersModel: UsersModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoanCreateUseCase,
        PrismaService,
        { provide: "CREATE", useClass: LoanCreateRepository },
      ],
    }).compile();

    service = module.get<LoanCreateUseCase>(LoanCreateUseCase);
  });

  let dto: LoanCreateAdaptorInputDto;

  describe("loan create unit test", () => {
    it("debtor is empty and should", async () => {
      dto = {
        debtor: "",
        debtorId: "",
        creditor: "",
        creditorId: "",
        totalAmountLoan: 0,
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
            message: "image required",
            error: "Bad Request",
          });
        }
      }
    });

    // it('exists not image in dto.contents.type', async () => {
    //   usersModel = await login();
    //
    //   const user: UsersModel = {
    //     ownerId: usersModel.ownerId,
    //     ownerAccountId: usersModel.ownerAccountId,
    //     ownerNickname: usersModel.ownerNickname,
    //   };
    //   dto = {
    //     title: '111',
    //     contents: [
    //       {
    //         type: 'text',
    //         content: 'hahaha',
    //       },
    //     ],
    //     ownerId: user.ownerId,
    //     ownerAccountId: user.ownerAccountId,
    //     ownerNickname: user.ownerNickname,
    //     thumbnail: '',
    //     category: 'GALLERY',
    //   };
    //
    //   try {
    //     await service.register(dto);
    //   } catch (e) {
    //     if (e instanceof BadRequestException) {
    //       const status = e.getStatus();
    //       expect(status).toStrictEqual(400);
    //
    //       const errorMessage = e.getResponse();
    //       console.log(errorMessage);
    //       expect(errorMessage).toStrictEqual({
    //         statusCode: 400,
    //         message: 'image required',
    //         error: 'Bad Request',
    //       });
    //     }
    //   }
    // });
    //
    // it('success should boards register', async () => {
    //   usersModel = await login();
    //   const user: UsersModel = {
    //     ownerId: usersModel.ownerId,
    //     ownerAccountId: usersModel.ownerAccountId,
    //     ownerNickname: usersModel.ownerNickname,
    //   };
    //   dto = {
    //     title: '111',
    //     contents: [
    //       {
    //         type: 'text',
    //         content:
    //           'https://livepickstar-avatar.s3.ap-northeast-2.amazonaws.com/back/8653360f-4778-420b-bc6b-82b287e9a2ad/1675320339485',
    //       },
    //       {
    //         type: 'text',
    //         content: 'hahaha',
    //       },
    //     ],
    //     ownerId: user.ownerId,
    //     ownerAccountId: user.ownerAccountId,
    //     ownerNickname: user.ownerNickname,
    //     thumbnail: '',
    //     category: 'SOCCER',
    //   };
    //
    //   try {
    //     const { response } = await service.register(dto);
    //     expect(response).not.toBe({});
    //     expect(response.ownerAccountId).toEqual(user.ownerAccountId);
    //     expect(response.ownerId).toEqual(user.ownerId);
    //     expect(response.title).toEqual('111');
    //     expect(response.contents).toEqual([
    //       {
    //         type: 'text',
    //         content:
    //           'https://livepickstar-avatar.s3.ap-northeast-2.amazonaws.com/back/8653360f-4778-420b-bc6b-82b287e9a2ad/1675320339485',
    //       },
    //       {
    //         type: 'text',
    //         content: 'hahaha',
    //       },
    //     ]);
    //   } catch (e) {
    //     console.error(e);
    //     throw new Error(e);
    //   }
    // });
    //
    // it('success should boards register', async () => {
    //   usersModel = await login();
    //   const user: UsersModel = {
    //     ownerId: usersModel.ownerId,
    //     ownerAccountId: usersModel.ownerAccountId,
    //     ownerNickname: usersModel.ownerNickname,
    //   };
    //   dto = {
    //     title: '111',
    //     contents: [
    //       {
    //         type: 'image',
    //         content:
    //           'https://livepickstar-avatar.s3.ap-northeast-2.amazonaws.com/back/8653360f-4778-420b-bc6b-82b287e9a2ad/1675320339485',
    //       },
    //       {
    //         type: 'text',
    //         content: 'hahaha',
    //       },
    //     ],
    //     ownerId: user.ownerId,
    //     ownerAccountId: user.ownerAccountId,
    //     ownerNickname: user.ownerNickname,
    //     thumbnail: '',
    //     category: 'GALLERY',
    //   };
    //
    //   try {
    //     const { response } = await service.register(dto);
    //     expect(response).not.toBe({});
    //     expect(response.ownerAccountId).toEqual(user.ownerAccountId);
    //     expect(response.ownerId).toEqual(user.ownerId);
    //     expect(response.title).toEqual('111');
    //     expect(response.contents).toEqual([
    //       {
    //         type: 'image',
    //         content:
    //           'https://livepickstar-avatar.s3.ap-northeast-2.amazonaws.com/back/8653360f-4778-420b-bc6b-82b287e9a2ad/1675320339485',
    //       },
    //       {
    //         type: 'text',
    //         content: 'hahaha',
    //       },
    //     ]);
    //   } catch (e) {
    //     console.error(e);
    //     throw new Error(e);
    //   }
    // });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
