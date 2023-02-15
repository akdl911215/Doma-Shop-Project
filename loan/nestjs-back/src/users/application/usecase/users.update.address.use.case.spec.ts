import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { NotFoundException } from "@nestjs/common";
import { UsersProfileAdaptorInputDto } from "../../inbound/dtos/users.profile.adaptor.input.dto";
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
    it("failed should address does not exist", async () => {
      dto = {
        address: "",
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
      };

      try {
        const { response } = await service.updateAddress(dto);
      } catch (e) {
        if (e instanceof NotFoundException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(404);

          const errorMessage = e.getResponse();
          expect(errorMessage).toStrictEqual({
            statusCode: 404,
            message: "NOTFOUND_USER",
            error: "Not Found",
          });
        }
      }
    });

    // it("success should user profile", async () => {
    //   dto = {
    //     id: "c2e2d0df-3139-424f-bee4-15a0b11e000f",
    //   };
    //
    //   const { response } = await service.profile(dto);
    //
    //   expect(response.id).toStrictEqual("c2e2d0df-3139-424f-bee4-15a0b11e000f");
    //   expect(response.userId).toStrictEqual("aaa");
    //   expect(response.nickname).toStrictEqual("admin");
    //   expect(response.password).toStrictEqual(
    //     "$2b$10$xBqjQweWRGsVFT.UOujny.W6cnEh3OrH/u37qgHSJJ69qwfpYeOdO"
    //   );
    //   expect(response.name).toStrictEqual("admain222");
    //   expect(response.phone).toStrictEqual("01050939902");
    //   expect(response.address).toStrictEqual("asdads");
    // });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
