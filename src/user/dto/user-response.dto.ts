import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserResponseDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  username: string;

  @Expose()
  @ApiProperty()
  email: string;

  @Expose()
  @ApiProperty()
  age: number;

  constructor(id: number, username: string, email: string, age: number) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.age = age;
  }
}