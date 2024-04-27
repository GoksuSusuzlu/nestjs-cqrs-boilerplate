import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1714220563576 implements MigrationInterface {
    name = 'Migration1714220563576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_portfolio" ("id" SERIAL NOT NULL, "shareName" character varying NOT NULL, "numberOfShares" numeric(10,2) NOT NULL, "userId" integer, CONSTRAINT "PK_ed075f379c7095338342c50c4a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_portfolio" ADD CONSTRAINT "FK_2e19a025e6271405a2cb88e1fcd" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_portfolio" DROP CONSTRAINT "FK_2e19a025e6271405a2cb88e1fcd"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
        await queryRunner.query(`DROP TABLE "user_portfolio"`);
    }

}
