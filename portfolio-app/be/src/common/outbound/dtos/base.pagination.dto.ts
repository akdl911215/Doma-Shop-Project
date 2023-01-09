import { IsArray, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BasePaginationInputDto {
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
    default: 1,
  })
  readonly page!: number;

  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
    default: 1,
  })
  readonly take!: number;
}

export class BasePaginationOutputDto<T> {
  @IsNumber()
  readonly resultPage!: number;

  @IsNumber()
  readonly resultTotalPage!: number;

  @IsArray()
  readonly currentList!: T[];
}
