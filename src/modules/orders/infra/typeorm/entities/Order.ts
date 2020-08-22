import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Column,
} from 'typeorm';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(() => Customer, {
    eager: true,
  })
  @JoinColumn({ name: 'customer_id' })
  public customer: Customer;

  @Column()
  customer_id: string;

  @OneToMany(() => OrdersProducts, order_products => order_products.order, {
    cascade: ['update', 'insert'],
    eager: true,
  })
  public order_products!: OrdersProducts[];

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export default Order;
