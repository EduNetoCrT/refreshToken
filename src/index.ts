import express, { request, response } from 'express';
import "reflect-metadata";
import './databases/connect'

const app = express();

const port = 4000;


app.use((request, response) => {
  response.json({msg: 'Rota não encontrada'})
});


app.listen(port, ()=> console.log(`Server rodando na porta ${port}`))

