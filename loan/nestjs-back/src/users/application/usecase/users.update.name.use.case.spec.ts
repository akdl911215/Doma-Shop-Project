import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { UsersUpdateNameUseCase } from "./users.update.name.use.case";
import { UsersUpdateNameRepository } from "../../infrastructure/repository/users.update.name.repository";
import { UsersUpdateNameAdaptorInputDto } from "../../inbound/dtos/users.update.name.adaptor.input.dto";

describe("UsersUpdateNameUseCase", () => {
  let service: UsersUpdateNameUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersUpdateNameUseCase,
        {
          provide: "UPDATE_NAME",
          useClass: UsersUpdateNameRepository,
        },
      ],
    }).compile();

    service = module.get<UsersUpdateNameUseCase>(UsersUpdateNameUseCase);
  });

  let dto: UsersUpdateNameAdaptorInputDto;
  describe("update name process", () => {
    it("name is empty and will fail", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
        name: "",
      };

      try {
        await service.updateName(dto);
      } catch (e) {
        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          // console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            error: "Bad Request",
            message: "CONFIRM_REQUIRED_NAME_INFORMATION",
            statusCode: 400,
          });
        }
      }
    });

    it("failed should wrong id", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
        name: "서울역",
      };

      try {
        await service.updateName(dto);
      } catch (e) {
        // console.log(e);

        if (e instanceof NotFoundException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(404);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            error: "Not Found",
            message: "NOTFOUND_USER",
            statusCode: 404,
          });
        }
      }
    });

    it("success should user name", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e000f",
        name: "변경한 이름이지롱 111",
      };

      const { response } = await service.updateName(dto);
      console.log(response);

      expect(response.id).toStrictEqual("c2e2d0df-3139-424f-bee4-15a0b11e000f");
      expect(response.userId).toStrictEqual("aaa");
      expect(response.nickname).toStrictEqual("admin");
      expect(response.password).toStrictEqual(
        "$2b$10$xBqjQweWRGsVFT.UOujny.W6cnEh3OrH/u37qgHSJJ69qwfpYeOdO"
      );
      expect(response.name).toStrictEqual("변경한 이름이지롱 111");
      expect(response.phone).toStrictEqual("01050939902");
      expect(response.address).toStrictEqual("변경한 주소지롱 111 222");
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
