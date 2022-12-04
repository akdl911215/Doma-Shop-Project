import { IsNotEmpty, IsNumber } from 'class-validator';
import { BaseOutputDto } from '../../common/dtos/base.output.dto';

export class DeleteInputUser {
  @IsNumber()
  @IsNotEmpty()
  id!: number;
}

export class DeleteOutputUser extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
