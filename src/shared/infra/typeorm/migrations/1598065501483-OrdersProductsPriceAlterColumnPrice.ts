import { MigrationInterface, QueryRunner } from 'typeorm';

export default class OrdersProductsPriceAlterColumnPrice1598065501483
  implements MigrationInterface {
  name = 'OrdersProductsPriceAlterColumnPrice1598065501483';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP COLUMN "price"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD "price" numeric(9,2) NOT NULL`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP COLUMN "price"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD "price" integer NOT NULL`,
      undefined,
    );
  }
}
