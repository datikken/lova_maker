import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('links')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  url: string;
}
