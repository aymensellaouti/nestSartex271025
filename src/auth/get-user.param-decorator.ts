import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "../user/entities/user.entity";

export const GetUser =  createParamDecorator((data, ctx: ExecutionContext): User => {	
    const req = ctx.switchToHttp().getRequest();	 
    // Todo return what do you want
    return req.user;
});