// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserCommandHandler } from './handlers/user-command.handlers';
import { FindUserQueryHandler } from './handlers/user-query.handlers';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    CreateUserCommandHandler,
    FindUserQueryHandler,
  ],
})
export class UserModule {}