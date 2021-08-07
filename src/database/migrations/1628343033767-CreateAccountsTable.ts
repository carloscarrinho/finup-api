import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateAccountsTable1628343033767 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "accounts",
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
            name: "label",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "initial_balance",
            type: "int",
            isNullable: false,
          },
          {
            name: "balance",
            type: "int",
            isNullable: false,
          },
          {
            name: "active",
            type: "boolean",
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "accounts",
      new TableForeignKey({
        name: "UserId",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('accounts', 'UserId');
    await queryRunner.dropTable('accounts');
  }
}
