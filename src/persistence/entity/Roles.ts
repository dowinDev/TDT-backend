import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Accounts } from './Accounts';

@Table({
  tableName: 'roles',
  timestamps: false,
  paranoid: false,
})
export class Roles extends Model<Roles> {
  @Column({
    field: 'name',
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  name: string;

  @HasMany(() => Accounts)
  accounts: Accounts[];
}
