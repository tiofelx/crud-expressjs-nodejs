# Node.js CRUD com File System e JSON

Este é um projeto de exemplo de um CRUD (Create, Read, Update, Delete) simples desenvolvido usando Node.js e Express.js. O objetivo deste projeto é demonstrar como criar, ler, atualizar e excluir registros em um arquivo JSON usando Node.js e File System.

## Funcionalidades

Este CRUD oferece as seguintes funcionalidades:

- **Criar**: Adicione novos registros ao arquivo JSON.
- **Ler**: Liste todos os registros existentes no arquivo JSON.
- **Atualizar**: Atualize os dados de um registro existente.
- **Excluir**: Remova registros do arquivo JSON.

## Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- **Node.js**: O ambiente de tempo de execução JavaScript usado para criar o servidor e executar o código no lado do servidor.
- **Express.js**: Um framework para criar APIs RESTful de forma fácil e eficiente.
- **File System (fs)**: Um módulo incorporado do Node.js que permite a leitura e escrita de arquivos no sistema de arquivos.
- **JSON**: Formato de dados leve usado para armazenar os registros.

## Como Usar

Para utilizar este projeto, siga estas etapas:

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js instalado em seu sistema.
3. Abra um terminal na pasta do projeto.
4. Execute o comando `npm install` para instalar as dependências.
5. Execute o comando `node app.js` para iniciar o servidor.

O servidor estará rodando em `http://localhost:3000`. Você pode usar uma ferramenta como o Postman ou até mesmo um navegador para acessar as rotas e realizar operações CRUD.

## Rotas

- **GET /api/records**: Retorna todos os registros no arquivo JSON.
- **POST /api/records**: Cria um novo registro.
- **GET /api/records/:id**: Retorna um registro específico com base no ID.
- **PUT /api/records/:id**: Atualiza um registro específico com base no ID.
- **DELETE /api/records/:id**: Exclui um registro específico com base no ID.

## Contribuição

Este é um projeto de código aberto e contribuições são bem-vindas. Se você deseja contribuir com melhorias, correções de bugs ou novos recursos, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é distribuído sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

Aproveite este projeto como um ponto de partida para construir suas próprias aplicações CRUD em Node.js!
