const express = require('express');
const app = express();

//Permitir receber dados em JSON
app.use(express.json());

//Simula um "banco de dados" em memória
let produtos =[
    {id: 1, nome:"Mouse"},
    {id: 2, nome:"Teclado"}
];

//GET - Lista todos os produtos
app.get('/api/produtos',(req,res)=>{
    res.json(produtos);
});

//POST
app.post('/api/produtos',(req,res)=>{
    const novoProduto ={
        id:produtos.lenght +1,
        nome:req.body.nome
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
})

//PUT
//DELETE

//Rota principal
app.get('/', (req, res) =>{
    res.send('Olá, este é o servidor com Express');
})

//Rota "sobre"
app.get('/sobre',(req,res)=>{
    res.send('Página Sobre');
});

//Rota "produto"
app.get('/produto', (req,res)=>{
    res.send('Lista de Produtos');
});

//Rota que retorna JSON (simula uma API)
app.get('/api/produtos', (req,res)=>{
    const produtos = [
        {id: 1,nome:'Mouse'},
        {id: 2,nome:'Teclado'}
    ];
    res.json(produtos);
})

//Inicia o servidor na porta 3000
app.listen(3000, () =>{
    console.log('Servidor rodando http://localhost:3000');
});

//node server.js