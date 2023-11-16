// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Responsável por lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const articleRouter = require('./routes/articleRouter');
const postRouter = require('./routes/postRouter');
const depositionsRouter = require('./routes/depositionsRouter')
const followRouter = require('./routes/followRouter')
const commentsRouter = require('./routes/commentsRouter')
const likeRouter = require('./routes/likeRouter')
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Torna a pasta public "visível" atrávez da URL, para assim mostrar as imagens
app.use('/uploads', express.static(__dirname + '\\public'));

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o recebimento de requests em formato JSON
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api/user', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api/article', articleRouter);
app.use('/api/post', postRouter);
app.use('/api/depositions', depositionsRouter);
app.use('/api/follow', followRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/like', likeRouter)
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 8000);

module.exports = app;