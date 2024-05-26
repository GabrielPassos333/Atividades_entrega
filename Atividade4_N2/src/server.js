import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); //cors faz com que a api possa ser acessada por qualquer origem
//fazer isso antes da definição da rota para que todas as rotas tenham acesso
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
})
