import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserPortfolioService } from '../user-portfolio.service';
import { CreatePortfolioCommand } from '../commands/create-user-portfolio.command';

@CommandHandler(CreatePortfolioCommand)
export class CreatePortfolioCommandHandler implements ICommandHandler
{
    constructor(private readonly userPortfolioService: UserPortfolioService) {}
  
    async execute(command: CreatePortfolioCommand): Promise<any> {
      const { user, shareName, numberOfShares } = command;
      return await this.userPortfolioService.createPortfolio(user, shareName, numberOfShares);
    }
}