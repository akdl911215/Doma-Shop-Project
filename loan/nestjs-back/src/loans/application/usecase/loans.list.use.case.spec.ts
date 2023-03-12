import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansListUseCase } from "./loans.list.use.case";
import { LoansListRepository } from "../../infrastructure/repository/loans.list.repository";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.list.adaptor.input.dto";

describe("LoansListUseCase", () => {
  let service: LoansListUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoansListUseCase,
        PrismaService,
        { provide: "LIST", useClass: LoansListRepository },
      ],
    }).compile();

    service = module.get<LoansListUseCase>(LoansListUseCase);
  });

  let dto: LoansListAdaptorInputDto;

  describe("loan list unit test", () => {
    it("success should loan create", async () => {
      dto = {
        page: -10,
        take: -10,
      };

      try {
        const { response } = await service.list(dto);
        console.log(response);
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
