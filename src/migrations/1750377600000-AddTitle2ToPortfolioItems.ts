import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTitle2ToPortfolioItems1750377600000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('portfolio_items');
    if (!table?.findColumnByName('title2')) {
      await queryRunner.query(
        `ALTER TABLE portfolio_items ADD COLUMN title2 VARCHAR(255) NULL`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('portfolio_items');
    if (table?.findColumnByName('title2')) {
      await queryRunner.query(
        `ALTER TABLE portfolio_items DROP COLUMN title2`,
      );
    }
  }
}
