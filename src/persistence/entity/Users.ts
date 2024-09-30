import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Accounts } from './Accounts';
import { Eatery } from './Eaterys';
import { FeedBacks } from './FeedBacks';
import { ContactsUs } from './ContactsUs';
import { ProductUserXref } from './ProductUserXref';

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true,
})
export class Users extends Model<Users> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    field: 'user_name',
    type: DataType.STRING,
    allowNull: false,
  })
  userName: string;

  @Column({
    field: 'password',
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    field: 'first_name',
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    field: 'last_name',
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    field: 'source',
    type: DataType.STRING,
    allowNull: false,
  })
  source: string;

  @Column({
    field: 'avatar',
    type: DataType.STRING,
    allowNull: false,
  })
  avatar: string;

  @Column({
    field: 'phone',
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    field: 'address',
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    field: 'secret_key',
    type: DataType.STRING,
    allowNull: false,
  })
  secretKey: string;

  @Column({
    field: 'reset_key',
    type: DataType.STRING,
    allowNull: false,
  })
  resetKey: string;

  @Column({
    field: 'birth_day',
    type: DataType.DATE,
    allowNull: false,
  })
  birthDay: Date;

  @Column({
    field: 'email',
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @HasMany(() => Accounts)
  accounts: Accounts[];

  @HasMany(() => Eatery)
  eateries: Eatery[];

  @HasMany(() => FeedBacks)
  feedbacks: FeedBacks[];

  @HasMany(() => ContactsUs)
  contactsUs: ContactsUs[];

  @HasMany(() => ProductUserXref)
  productUserXrefs: ProductUserXref[];
}
