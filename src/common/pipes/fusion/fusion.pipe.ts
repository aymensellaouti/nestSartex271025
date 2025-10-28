import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FusionPipe implements PipeTransform {
  transform(skills: string[], metadata: ArgumentMetadata) {
    if(metadata.type === 'body' && skills) {
        return skills.join('-').toUpperCase();
    } else throw new BadRequestException('Veuillez vérifier vos paramètres')
  }
}
