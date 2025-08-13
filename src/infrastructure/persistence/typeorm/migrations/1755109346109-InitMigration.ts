import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1755109346109 implements MigrationInterface {
    name = 'InitMigration1755109346109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_a1bf4bcc1cf0a66a9c5c2cb630\` ON \`agenda\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_a1bf4bcc1cf0a66a9c5c2cb630\` ON \`agenda\` (\`dia\`, \`id_nutricionista\`)`);
    }

}
