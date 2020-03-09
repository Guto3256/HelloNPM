const http = require('http');
const { Form } = require('brazil-mocker');

let nome;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    nome = Form.names.fullName.generate();
    res.end('Oi ' + nome);
}).listen(3000);

console.log('O node esta rodando na porta 3000, para encerrar o serviço pressione Ctrl + C! Este é o NPM!');