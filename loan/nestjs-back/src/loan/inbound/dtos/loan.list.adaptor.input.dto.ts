export class LoanListAdaptorInputDto {
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
    default: 1,
  })
  public page!: number;

  // 리스트 행 갯수
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
    default: 10,
  })
  public take!: number;
}
