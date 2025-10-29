import { Module } from "@nestjs/common";
import { FirstController } from './first.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entity/product.entity";

@Module({
  controllers: [FirstController],
  imports: [TypeOrmModule.forFeature([Product])]
})
export class FirstModule {
    
}