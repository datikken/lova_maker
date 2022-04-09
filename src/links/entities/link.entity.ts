import { Table, Column, Model} from 'sequelize-typescript';

@Table
export class Link extends Model {
  @Column
  url: string;
}
