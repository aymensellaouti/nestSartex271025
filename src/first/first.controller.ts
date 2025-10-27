import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Headers } from '@nestjs/common';

@Controller('first')
export class FirstController {

    @Get('')
    testGet() {
        console.log('GET');
        return 'GET'
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
