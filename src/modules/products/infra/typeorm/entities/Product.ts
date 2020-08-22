import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column({ type: 'numeric', precision: 9, scale: 2 })
  public price: number;

  @Column()
  public quantity: number;

  @OneToMany(() => OrdersProducts, order_products => order_products.product)
  public order_products!: OrdersProducts[];

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export default Product;
