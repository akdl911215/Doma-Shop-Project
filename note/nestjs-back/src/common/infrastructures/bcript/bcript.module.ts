import { Module } from "@nestjs/common";
import { BcriptService } from "./bcript.service";

@Module({
  providers: [
    {
      provide: "IN_CODED",
      useClass: BcriptService,
    },
    {
      provide: "DE_CODED",
      useClass: BcriptService,
    },
  ],
  exports: [
    {
      provide: "IN_CODED",
      useClass: BcriptService,
    },
    {
      provide: "DE_CODED",
      useClass: BcriptService,
    },
  ],
})
export class BcriptModule {}
