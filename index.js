import express from "express";
import handlebars from "express-handlebars";
import bodyParser from "body-parser";
import { Post } from "./models/Post.js";

// Configuração
// Template Engine
const hbs = handlebars.create({ defaultLayout: "main" });
const app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas

app.get("/", function (req, res) {
  Post.findAll().then(function (posts) {
    res.render("home", {
      posts: posts,
    });
  });
});

app.get("/cad", function (req, res) {
  res.render("formulario");
});

app.post("/add", function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      res.send("Erro no envio do formulário: ", error);
    });
});

app.listen(8081, function () {
  console.log("Servidor rodando na porta 8081");
});
