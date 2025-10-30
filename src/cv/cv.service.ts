import { Injectable } from '@nestjs/common';
import { GenericCrud } from '../common/generics/generic-crud.service';
import { Cv } from './entities/cv.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CvService extends GenericCrud<Cv> {
  constructor(
    @InjectRepository(Cv)
    private cvRepository: Repository<Cv>
  ) {
    super(cvRepository);
  }
  
}
