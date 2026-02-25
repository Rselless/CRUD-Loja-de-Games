🎮 Loja de Jogos

Este é um projeto desenvolvido em NestJS com TypeORM e MySQL para gerenciamento de um catálogo de jogos e categorias.

🚀 Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:

Node.js (versão 18 ou superior)

MySQL (ou um container Docker com MySQL)

npm ou yarn

📥 Instalação e Configuração
Clone o repositório:

Bash
git clone https://github.com/Rselless/CRUD-Loja-de-Games#
cd seu-repositorio
Instale as dependências:

Bash
npm install
Configure o Banco de Dados:
Crie um banco de dados no seu MySQL chamado db_lojajogos. No arquivo app.module.ts (ou no seu .env), certifique-se de que as credenciais estão corretas:

Host: localhost

Port: 3306

Username: seu_usuario

Password: sua_senha

Database: db_lojajogos

⚙️ Como Rodar
Para iniciar o servidor de desenvolvimento, execute:

Bash
npm run start:dev
O servidor estará disponível em: http://localhost:4000 (ou na porta que você configurou).

📖 Acessando a Documentação (Swagger)
A documentação interativa da API foi criada com Swagger. Com o servidor rodando, você pode acessar:

🔗 http://localhost:4000/swagger

No Swagger, você poderá:

Visualizar todos os endpoints disponíveis.

Testar as rotas de Produtos e Categorias.

Verificar os modelos de dados (Schemas).

Atenção: Ao realizar um POST em /produtos, lembre-se que é obrigatório informar um ID de categoria válido que já exista no banco.
