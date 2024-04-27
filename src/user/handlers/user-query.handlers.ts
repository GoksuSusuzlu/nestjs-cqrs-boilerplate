import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { UserService } from '../user.service';
import { User } from '../user.entity';
import { FindUserQuery } from '../queries/find-user.query';
import { FindAllUsersQuery } from '../queries/find-all-user.query';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(FindAllUsersQuery)
export class FindAllUsersQueryHandler implements IQueryHandler
{
    constructor(private readonly userService: UserService) {}
  
    async execute(query: FindAllUsersQuery): Promise<User[] | undefined> {
      // Find all users
      return await this.userService.findAllUsers();
    }
    
}

@QueryHandler(FindUserQuery)
export class FindUserQueryHandler implements IQueryHandler
{
    constructor(private readonly userService: UserService) {}
  
    async execute(query: FindUserQuery): Promise<User | undefined> {
      const { userId } = query;
      // Find user by ID
      const user = await this.userService.findUserById(userId);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    }
}