import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { CvService } from './cv.service';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.param-decorator';
import { User } from '../user/entities/user.entity';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';

@Controller('cv')
@Roles('admin')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post()
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createCvDto: CreateCvDto,
    @GetUser() user: User) {
    createCvDto.user = user;
    return this.cvService.create(createCvDto);
  }

  @Get()
  @Roles('user')
  findAll() {
    return this.cvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCvDto: UpdateCvDto) {
    return this.cvService.update(+id, updateCvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cvService.remove(+id);
  }
}
