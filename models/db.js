import { Sequelize } from "sequelize";
// Conexão com o banco de dados MySQL
const sequelize = new Sequelize("postapp", "root", "kosmo123", {
  host: "localhost",
  dialect: "mysql",
});

export { Sequelize, sequelize };
