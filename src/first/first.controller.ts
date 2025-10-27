import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Headers } from '@nestjs/common';

@Controller('premier')
export class FirstController {

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
