import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { UserPortfolio } from './user-portfoio.entity';

@Injectable()
export class UserPortfolioService {
  constructor(
    @InjectRepository(UserPortfolio)
    private readonly userPortfolioRepository: Repository<UserPortfolio>,
  ) {}

  async createPortfolio(user: User, shareName: string, numberOfShares: number): Promise<UserPortfolio> {
    const portfolio = this.userPortfolioRepository.create({user, shareName, numberOfShares})
    return await this.userPortfolioRepository.save(portfolio);
  }

  async updatePortfolio(portfolioId: number, numberOfShares: number): Promise<UserPortfolio> {
    const portfolio = await this.userPortfolioRepository.findOne({where: {id: portfolioId}});
    if (!portfolio) {
      throw new Error('Portfolio not found');
    }
    portfolio.numberOfShares = numberOfShares;
    return await this.userPortfolioRepository.save(portfolio);
  }

  async deletePortfolio(portfolioId: number): Promise<void> {
    const portfolio = await this.userPortfolioRepository.findOne({where: {id: portfolioId}});
    if (!portfolio) {
      throw new Error('Portfolio not found');
    }
    await this.userPortfolioRepository.remove(portfolio);
  }

  async getAllPortfoliosForUser(user: User): Promise<UserPortfolio[]> {
    return await this.userPortfolioRepository.find({ where: { user } });
  }
}