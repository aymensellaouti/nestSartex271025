import { Injectable } from '@nestjs/common';
import { GenericCrud } from '../common/generics/generic-crud.service';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends GenericCrud<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
    super(userRepository);
  }
}
