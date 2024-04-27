import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserCommand } from '../commands/create-user.command';
import { UserService } from '../user.service';
import { User } from '../user.entity';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler {
  constructor(private readonly userService: UserService) { }

  async execute(command: CreateUserCommand): Promise<User> {
    this.validateUserData(command);
    return await this.userService.createUser(command.data);
  }

  private validateUserData(command: CreateUserCommand): void {
    // Perform additional validation logic
    if (command.data.age < 18) {
      throw new Error('User must be at least 18 years old');
    }
  }
}