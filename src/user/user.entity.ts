import { UserPortfolio } from 'src/user-portfoilo/user-portfoio.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @OneToMany(() => UserPortfolio, portfolio => portfolio.user)
  portfolio: UserPortfolio[];
}