import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sockets')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  url: string;

  @Column()
  description: string;
}
