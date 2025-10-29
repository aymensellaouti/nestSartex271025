import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Headers } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('premier')
export class FirstController {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) {}
    // premier/ayParam
    @Get(':haja')
    testGet(
        @Param('haja') myParam
    ) {
        console.log({myParam});
        return myParam
    }
    @Post('')
    testPost(
        @Body() body,
        @Param() param,
        @Query() query,
        @Headers('host')  headers
    ) {
        console.log({body, param, query, headers});
        
        console.log('Post');
        return 'Post'
    }
    @Put('')
    testPut() {
        console.log('Put');
        return 'Put'
    }
    @Patch('')
    testPatch() {
        console.log('Patch');
        return 'Patch'
    }
    @Delete('')
    testDelete() {
        console.log('Delete');
        return 'Delete'
    }
}
