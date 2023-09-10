import { User } from '../users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  millage: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column({ default: true })
  approved: boolean;

  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
