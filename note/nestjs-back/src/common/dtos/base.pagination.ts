import { IsArray, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class BasePaginationInputDto {
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
    default: 1,
  })
  public page!: number;

  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
    default: 1,
  })
  public take!: number;
}

export class BasePaginationOutputDto<T> {
  @IsNumber()
  public resultPage!: number;

  @IsNumber()
  public resultTotalPage!: number;

  @IsArray()
  public currentList!: T[];
}
