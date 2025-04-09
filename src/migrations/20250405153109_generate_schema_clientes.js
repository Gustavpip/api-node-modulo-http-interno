export async function up(knex) {
  await knex.raw(`
      CREATE TABLE IF NOT EXISTS clientes (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        telefone VARCHAR(20) NOT NULL,
        data_cadastro TIMESTAMP DEFAULT NOW()
      );
    `);
}

export async function down(knex) {
  await knex.raw("DROP TABLE clientes;");
}
