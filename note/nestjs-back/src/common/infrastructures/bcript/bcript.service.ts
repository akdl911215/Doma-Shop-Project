import { Injectable } from "@nestjs/common";
import { BcriptIncodedInterface } from "./interfaces/bcript.incoded.interface";
import { BcriptDecodedInterface } from "./interfaces/bcript.decoded.interface";
import * as bcrypt from "bcrypt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class BcriptService
  implements BcriptIncodedInterface, BcriptDecodedInterface
{
  constructor(private readonly configService: ConfigService) {}

  public async decoded(
    password: string,
    hashPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
  public async incoded(password: string): Promise<string> {
    return await bcrypt.hash(
      password,
      Number(this.configService.get<number>("BCRIPT_SOLT_NUMBER"))
    );
  }
}
