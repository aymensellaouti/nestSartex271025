import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { User } from "../../user/entities/user.entity";
@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      const user: User = context.switchToHttp().getRequest().user;
      const handler = context.getHandler();
      const classe = context.getClass();
      const allowedRoles = this.reflector.getAllAndMerge('roles', [
        handler, classe
      ])
      console.log({
        user,
        handler, 
        classe, 
        allowedRoles
      });
      if(!allowedRoles.includes(user.role))
        throw new ForbiddenException('Vous ne disposez pas du role nécessaire');  
      return true 
    }
    
}