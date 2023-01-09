import { Inject, Injectable } from '@nestjs/common';
import { UsersFindByIdInterface } from '../../interfaces/users.find.by.id.interface';
import { UsersFindByIdAdaptorInputDto } from '../../../../inbound/dtos/users.find.by.id.adaptor.input.dto';
import { UsersFindByIdAdaptorOutputDto } from '../../../../outbound/dtos/users.find.by.id.adaptor.output.dto';

@Injectable()
export class UsersFindByIdUseCase implements UsersFindByIdInterface {
  constructor(
    @Inject('USERS_FIND_BY_ID')
    private readonly repository: UsersFindByIdInterface,
  ) {}

  public async usersFindById({
    id,
  }: UsersFindByIdAdaptorInputDto): Promise<UsersFindByIdAdaptorOutputDto> {
    return await this.repository.usersFindById({ id });
  }
}
