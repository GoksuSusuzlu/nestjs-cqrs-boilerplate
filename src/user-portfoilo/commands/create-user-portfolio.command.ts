import { User } from "src/user/user.entity";

export class CreatePortfolioCommand {
    constructor(
      public readonly user: User,
      public readonly shareName: string,
      public readonly numberOfShares: number,
    ) {}
  }