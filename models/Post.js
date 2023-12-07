import { Sequelize, sequelize } from "./db.js";

const Post = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

// Post.sync({force: true}) -- Executar 1 vez só quando iniciar o módulo

export { Post };
