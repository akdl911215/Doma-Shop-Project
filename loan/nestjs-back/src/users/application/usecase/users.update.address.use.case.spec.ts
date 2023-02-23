import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { UsersUpdateAddressUseCase } from "./users.update.address.use.case";
import { UsersUpdateAddressRepository } from "../../infrastructure/repository/users.update.address.repository";
import { UsersUpdateAddressAdaptorInputDto } from "../../inbound/dtos/users.update.address.adaptor.input.dto";

describe("UsersUpdateAddressUseCase", () => {
  let service: UsersUpdateAddressUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersUpdateAddressUseCase,
        {
          provide: "UPDATE_ADDRESS",
          useClass: UsersUpdateAddressRepository,
        },
      ],
    }).compile();

    service = module.get<UsersUpdateAddressUseCase>(UsersUpdateAddressUseCase);
  });

  let dto: UsersUpdateAddressAdaptorInputDto;
  describe("update address process", () => {
    it("address is empty and will fail", async () => {
      dto = {
        address: "",
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
      };

      try {
        await service.updateAddress(dto);
      } catch (e) {
        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          expect(errorMessage).toStrictEqual({
            error: "Bad Request",
            message: "CONFIRM_REQUIRED_ADDRESS_INFORMATION",
            statusCode: 400,
          });
        }
      }
    });

    it("failed should wrong id", async () => {
      dto = {
        address: "서울역",
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
      };

      try {
        await service.updateAddress(dto);
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

    it("success should user address", async () => {
      dto = {
        address: "변경한 주소지롱 111 222",
        id: "c2e2d0df-3139-424f-bee4-15a0b11e000f",
      };

      const { response } = await service.updateAddress(dto);
      // console.log(response);

      expect(response.id).toStrictEqual("c2e2d0df-3139-424f-bee4-15a0b11e000f");
      expect(response.userId).toStrictEqual("aaa");
      expect(response.nickname).toStrictEqual("admin");
      expect(response.password).toStrictEqual(
        "$2b$10$xBqjQweWRGsVFT.UOujny.W6cnEh3OrH/u37qgHSJJ69qwfpYeOdO"
      );
      expect(response.name).toStrictEqual("admain222");
      expect(response.phone).toStrictEqual("01050939902");
      expect(response.address).toStrictEqual("변경한 주소지롱 111 222");
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
