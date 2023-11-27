import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('your_table_name', table => {
            table.increments('id').primary();
            // 다른 필드 정의
            // 예: table.string('name').notNullable();
            // Stelace 파일에서 찾은 필드와 데이터 타입을 참조하여 필드를 추가하세요.
        });
        // 필요한 경우 추가 테이블을 생성합니다.
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTableIfExists('your_table_name');
        // 필요한 경우 추가 테이블을 삭제합니다.
}
