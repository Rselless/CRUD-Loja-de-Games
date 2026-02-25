# 🎮 CRUD Loja de Games

<p align="center">
  <img src="https://img.icons8.com/fluency/144/controller.png" alt="Logo do Projeto">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-brightgreen" alt="Status">
  <img src="https://img.shields.io/github/languages/top/Rselless/CRUD-Loja-de-Games" alt="Top Language">
  <img src="https://img.shields.io/github/repo-size/Rselless/CRUD-Loja-de-Games" alt="Repo Size">
</p>

---

## 📝 SOBRE O PROJETO

Este projeto é uma API REST  desenvolvida para gerenciar um catálogo de jogos e suas respectivas categorias. Ele permite o cadastro, consulta, atualização e exclusão (CRUD) de itens, garantindo a integridade dos dados através de relacionamentos relacionais entre as entidades de **Produtos** e **Categorias**.

Desenvolvido como parte dos estudos durante o bootcamp da Generation Brasil, aplica conceitos de documentação automatizada com Swagger e persistência de dados utilizando TypeORM.

---

## 🛠️ TECNOLOGIAS UTILIZADAS

| Tecnologia | Descrição |
| :--- | :--- |
| ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=flat-square&logo=nestjs&logoColor=white) | Framework para aplicações server-side eficientes e escaláveis. |
| ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=flat-square&logo=mysql&logoColor=white) | Sistema de gerenciamento de banco de dados relacional. |
| ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white) | Adiciona tipagem estática e segurança ao código JavaScript. |
| ![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=flat-square&logo=typeorm&logoColor=white) | ORM para mapeamento entre objetos TypeScript e tabelas MySQL. |
| ![Swagger](https://img.shields.io/badge/-Swagger-%23C1E1C1?style=flat-square&logo=swagger&logoColor=black) | Interface interativa para documentação e testes da API. |

---

## 🚀 COMO RODAR O PROJETO LOCALMENTE

### 1️⃣ Clonar o Repositório
```bash
git clone [https://github.com/Rselless/CRUD-Loja-de-Games.git](https://github.com/Rselless/CRUD-Loja-de-Games.git)
cd CRUD-Loja-de-Games
2️⃣ Instalar Dependências
Bash
npm install
3️⃣ Configurar o Banco de Dados
Certifique-se de que o MySQL está rodando e crie o schema:

SQL
CREATE DATABASE db_lojajogos;
Verifique as credenciais de acesso (host, usuário e senha) no arquivo de configuração do banco.

4️⃣ Iniciar a Aplicação
Bash
npm run start:dev
📖 DOCUMENTAÇÃO SWAGGER
Com o servidor em execução, você pode acessar a interface interativa para testar todos os endpoints disponíveis em:

🔗 http://localhost:4000/swagger

Nota: Para realizar um POST de produto com sucesso, é necessário que o ID da categoria enviado no JSON já esteja previamente cadastrado no banco de dados.
