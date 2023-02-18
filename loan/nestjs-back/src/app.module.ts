import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { CONFIG_MODULE } from "./common/infrastructures/env/config.module";

@Module({
  imports: [CONFIG_MODULE, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
