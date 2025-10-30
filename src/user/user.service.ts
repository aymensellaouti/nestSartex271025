import { ConflictException, Injectable } from '@nestjs/common';
import { GenericCrud } from '../common/generics/generic-crud.service';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from '../auth/dto/register.dto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UserService extends GenericCrud<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
    super(userRepository);
  }
   async create(registerDto: RegisterDto): Promise<User> {
    const user = this.userRepository.create(registerDto);
    const salt = await genSalt();
    user.password = await hash(user.password, salt);
    let newUser;
    try {
      newUser = await this.userRepository.save(user);
      delete newUser.password;
    } catch (e) {
      throw new ConflictException(
        'le username et le email doivent être unique',
      );
    }
    return newUser;
  }

  findByUserNameOrEmail(identifier: string): Promise<User> {
    return this.userRepository.findOne({
      where: [{ username: identifier }, { email: identifier }],
    });
  }
}
