import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Eatery } from './Eaterys';
import { ProductUserXref } from './ProductUserXref';

@Table({
  tableName: 'products',
  timestamps: false,
  paranoid: false,
})
export class Products extends Model<Products> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    field: 'name',
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    field: 'expiration_date',
    type: DataType.DATE,
    allowNull: false,
  })
  expirationDate: Date;

  @Column({
    field: 'quantity',
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    field: 'contact',
    type: DataType.STRING,
    allowNull: false,
  })
  contact: string;

  @Column({
    field: 'price',
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    field: 'description',
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @ForeignKey(() => Eatery)
  @Column({
    field: 'eatery_id',
    type: DataType.INTEGER,
    allowNull: false,
  })
  eateryId: number;

  @BelongsTo(() => Eatery)
  eatery: Eatery;

  @HasMany(() => ProductUserXref)
  productUserXrefs: ProductUserXref[];
}
