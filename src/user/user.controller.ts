// src/user/user.controller.ts
import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserCommand } from './commands/create-user.command';
import { FindUserQuery } from './queries/find-user.query';
import { plainToClass } from 'class-transformer';
import { UserResponseDto } from './dto/user-response.dto';
import { ApiOperation, ApiNotFoundResponse } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @ApiOperation({ summary: 'create a user' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.commandBus.execute(new CreateUserCommand(createUserDto));
    console.log(user);
    return plainToClass(UserResponseDto, user);
  }

  @Get(':id')
  async findUserById(@Param('id') userId: number): Promise<UserResponseDto> {
    const user = await this.queryBus.execute(new FindUserQuery(userId));
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return plainToClass(UserResponseDto, user);
  }
}