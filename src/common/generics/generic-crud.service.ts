import { Injectable, NotFoundException } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class GenericCrud<Entity> {
  constructor(private repository: Repository<Entity>) { }

  findAll(options?: FindManyOptions<Entity>) {
    return options ? this.repository.find(options) : this.repository.find();
  }

  create(createDto) {
    return this.repository.save(createDto);
  }



  findOne(id) {
    return this.repository.findOne({ where: id });
  }

  async update(id: number, updateDto) {
    const entity = await this.repository.preload({ id, ...updateDto });
    if (!entity) throw new NotFoundException('Entité innexistante');
    return this.repository.save(entity);
  }

  /**
  * delete l'entité en utilisant l'id
  * @param id : l'id de l'entité à supprimer
  * @returns 
  */
  async remove(id): Promise<{ count: number }> {
    const result = await this.repository.softDelete(id);
    if (result.affected == 0) throw new NotFoundException('entité innexistante');
    return { count: result.affected };
  }

  /**
   * delete l'entité en utilisant l'id
   * @param id : l'id de l'entité à supprimer
   * @returns 
   */
  async restore(id: string): Promise<{ count: number }> {
    const result = await this.repository.restore(id);
    if (result.affected == 0) throw new NotFoundException('entité innexistant');
    return { count: result.affected };
  }
}
