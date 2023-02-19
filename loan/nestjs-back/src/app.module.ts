import { Module } from "@nestjs/common";
import { CONFIG_MODULE } from "./common/infrastructures/env/config.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [CONFIG_MODULE, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
