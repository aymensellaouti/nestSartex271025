import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('first')
export class FirstController {

    @Get('')
    testGet() {
        console.log('GET');
        return 'GET'
    }
    @Post('')
    testPost() {
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
