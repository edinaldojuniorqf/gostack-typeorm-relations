import { MigrationInterface, QueryRunner } from 'typeorm';

export default class ProductAlterColumnPrice1598065937799
  implements MigrationInterface {
  name = 'ProductAlterColumnPrice1598065937799';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP COLUMN "price"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD "price" numeric(9,2) NOT NULL`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP COLUMN "price"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD "price" integer NOT NULL`,
      undefined,
    );
  }
}
