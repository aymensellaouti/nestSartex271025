import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { randEmail, randFirstName, randJobTitle, randLastName, randNumber, randUserName } from '@ngneat/falso';
import { CvService } from '../cv/cv.service';
import { Cv } from '../cv/entities/cv.entity';
import { Skill } from '../skill/entities/skill.entity';
import { SkillService } from '../skill/skill.service';
import { User, UserRoleEnum } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  // Todo :  Do What you want
  const skillService = app.get(SkillService);
  const cvService = app.get(CvService);
  const userService = app.get(UserService);

  for (let i = 0; i < 10; i++) {
    const skill = new Skill();
    skill.designation = randJobTitle();
    await skillService.create(skill);
  }
  const skills = await skillService.findAll();
  console.log('skills Added To the DB....');
  for (let i = 0; i < 10; i++) {
    const user = new User();
    user.username = randUserName();
    user.email = randEmail();
    user.password = 'password'; //randPassword()
    await userService.create(user);
  }
  const users = await userService.findAll();
  let selectedSkills = [];
  console.log('users Added To the DB....');
  for (let i = 0; i < 10; i++) {
    const cv = new Cv();
    cv.age = randNumber({ min: 10, max: 65 });
    cv.job = randJobTitle();
    cv.name = randFirstName() + ' ' + randLastName();
    cv.path = '';
    cv.user = users[i];
    cv.skills = [];
    skills.sort(() => 0.5 - Math.random());
    selectedSkills = skills.slice(0,3);
    cv.skills = selectedSkills;
    await cvService.create(cv);
  }

  console.log('cvs Added To the DB....');
  await app.close();
}
bootstrap();
