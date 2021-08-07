import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTransactionsTable1628344091731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "transactions",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
              generationStrategy: "uuid",
              default: "uuid_generate_v4()",
            },
            {
              name: "user_id",
              type: "uuid",
              isNullable: false,
            },
            {
              name: "account_id",
              type: "uuid",
              isNullable: false,
            },
            {
              name: "description",
              type: "varchar",
              isNullable: false,
            },
            {
              name: "is_paid",
              type: "boolean",
              isNullable: false,
            },
            {
              name: "type",
              type: "varchar",
              isNullable: false,
            },
            {
              name: "category",
              type: "varchar",
              isNullable: false,
            },
            {
              name: "value",
              type: "int",
              isNullable: false,
            },
            {
              name: "payment_date",
              type: "timestamp with time zone",
              isNullable: false,
            },
            {
              name: "effective_date",
              type: "timestamp with time zone",
              isNullable: false,
            },
            {
              name: "single",
              type: "boolean",
              isNullable: false,
            },
            {
              name: "repetition",
              type: "varchar",
              isNullable: false,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        })
      );
  
      await queryRunner.createForeignKey(
        "transactions",
        new TableForeignKey({
          name: "UserId",
          columnNames: ["user_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "users",
          onDelete: "SET NULL",
          onUpdate: "CASCADE",
        })
      );

      await queryRunner.createForeignKey(
        "transactions",
        new TableForeignKey({
          name: "AccountId",
          columnNames: ["account_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "accounts",
          onDelete: "SET NULL",
          onUpdate: "CASCADE",
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('transactions', 'AccountId');
      await queryRunner.dropForeignKey('transactions', 'UserId');
      await queryRunner.dropTable('transactions');
    }
}
