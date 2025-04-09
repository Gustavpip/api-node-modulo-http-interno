import knex from "knex";
import knexConfig from "./knexConfig.js";

const db = knex(knexConfig.development);

export default db;
