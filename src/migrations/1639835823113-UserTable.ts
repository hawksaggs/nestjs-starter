import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTable1639835823113 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE users MODIFY COLUMN isActive TINYINT(1) NOT NULL DEFAULT true`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
