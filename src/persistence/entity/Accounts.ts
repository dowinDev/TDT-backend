import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Roles } from './Roles';
import { Users } from './Users';

@Table({
  tableName: 'accounts',
  timestamps: true,
  paranoid: true,
})
export class Accounts extends Model<Accounts> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    field: 'username',
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @ForeignKey(() => Roles)
  @Column({
    field: 'role_id',
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId: number;

  @ForeignKey(() => Users)
  @Column({
    field: 'user_id',
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => Roles)
  role: Roles;

  @BelongsTo(() => Users)
  user: Users;
}
