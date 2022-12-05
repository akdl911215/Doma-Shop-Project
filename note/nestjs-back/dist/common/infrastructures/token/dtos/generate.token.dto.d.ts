import { BaseOutputDto } from "../../../dtos/base.output.dto";
export declare class GenerateTokenInputDto {
    accessToken: string;
    refreshToken: string;
}
export declare class GenerateTokenOutputDto extends BaseOutputDto<GenerateTokenInputDto> {
}
