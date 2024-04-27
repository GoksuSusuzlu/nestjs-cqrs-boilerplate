import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class UserPortfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shareName: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  numberOfShares: number;

  @ManyToOne(() => User, user => user.portfolio)
  user: User;
}