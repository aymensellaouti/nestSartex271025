import { Injectable } from '@nestjs/common';
import { GenericCrud } from '../common/generics/generic-crud.service';
import { Skill } from './entities/skill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SkillService extends GenericCrud<Skill> {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>
  ) {
    super(skillRepository);
  }
}
