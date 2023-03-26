import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, ConflictException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { CreditorsCreateUseCase } from "./creditors.create.use.case";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { CreditorsCreateRepository } from "../../infrastructure/repository/creditors.create.repository";
import { UsersExistsUserInterfaceInputDto } from "../../../loans/inbound/dtos/interfaces/users.exists.user.interface.input.dto";
import { UsersExistsUniqueIdRepository } from "../../infrastructure/repository/users.exists.unique.id.repository";
import { CreditorsCreateAdaptorInputDto } from "../../inbound/dtos/adaptors/creditors.create.adaptor.input.dto";

describe("level create useCase", () => {
  let service: CreditorsCreateUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreditorsCreateUseCase,
        PrismaService,
        {
          provide: "CREATE",
          useClass: CreditorsCreateRepository,
        },
        {
          provide: "USERS_EXISTS_FOUND_BY_ID",
          useClass: UsersExistsUniqueIdRepository,
        },
        ConfigService,
      ],
    }).compile();

    service = module.get<CreditorsCreateUseCase>(CreditorsCreateUseCase);
  });

  let dto: CreditorsCreateAdaptorInputDto;
  describe("creditors create create process", () => {
    it("the name is empty, so it fails", async () => {
      dto = {
        creditorsUniqueIds: [],
        creditorsConfirmationId: 0,
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
            error: "Bad Request",
            message: "name_required",
            statusCode: 400,
          });
        }
      }
    });

    it("the level-id is zero, so it fails", async () => {
      dto = {
        name: "동111",
        levelId: 0,
        minimum: 0,
        maximum: 0,
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
            error: "Bad Request",
            message: "levelId_required",
            statusCode: 400,
          });
        }
      }
    });

    it("the minimum is zero, so it fails", async () => {
      dto = {
        name: "동111",
        levelId: 1,
        minimum: 0,
        maximum: 0,
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
            error: "Bad Request",
            message: "minimum_required",
            statusCode: 400,
          });
        }
      }
    });

    it("the maximum is zero, so it fails", async () => {
      dto = {
        name: "동111",
        levelId: 1,
        minimum: 1,
        maximum: 0,
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
            error: "Bad Request",
            message: "maximum_required",
            statusCode: 400,
          });
        }
      }
    });

    it("the unique names overlap, so it fails", async () => {
      dto = {
        name: "동1",
        levelId: 1,
        minimum: 1,
        maximum: 10,
      };

      try {
        await service.create(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof ConflictException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(409);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 409,
            message: "levelName",
            error: "Conflict",
          });
        }
      }
    });

    it("the unique level-id overlap, so it fails", async () => {
      dto = {
        name: "동2",
        levelId: 1,
        minimum: 1,
        maximum: 10,
      };

      try {
        await service.create(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof ConflictException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(409);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            statusCode: 409,
            message: "levelId",
            error: "Conflict",
          });
        }
      }
    });

    it("success should level create", async () => {
      dto = {
        name: "동1",
        levelId: 1,
        minimum: 1,
        maximum: 10,
      };

      try {
        const { response } = await service.create(dto);
        console.log(response);
        expect(response.levelId).toStrictEqual(dto.levelId);
        expect(response.name).toStrictEqual(dto.name);
        expect(response.minimum).toStrictEqual(dto.minimum);
        expect(response.maximum).toStrictEqual(dto.maximum);
      } catch (e) {
        console.log(e);
      }
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
