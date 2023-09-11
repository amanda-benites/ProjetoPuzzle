const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 8000;
const secretKey = 'yourSecretKey';

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const validUsers = [
        { email: 'aluno1@example.com', password: '12345' },
        { email: 'aluno2@example.com', password: '54321' }
    ];

    const matchedUser = validUsers.find(user => user.email === email && user.password === password);

    if (matchedUser) {
        const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

        return res.status(200).json({ message: 'Login bem-sucedido!', token });
    } else {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
