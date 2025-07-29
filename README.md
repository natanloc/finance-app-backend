# Finance App - Backend

API REST para gerenciamento financeiro pessoal, desenvolvida em **Node.js com Fastify**, utilizando **Prisma ORM** e banco de dados **PostgreSQL** em container Docker.

---

## 🚀 Tecnologias

- Node.js (Fastify)
- Prisma ORM
- PostgreSQL (Docker)
- TypeScript
- Zod (validação de dados)

---

## 📂 Estrutura do Projeto

backend/
┣ prisma/
┃ ┣ migrations/ # Histórico de migrations
┃ ┗ schema.prisma # Definição dos models
┣ src/
┃ ┣ controllers/ # Lógica de criação e listagem de transações
┃ ┣ lib/ # Inicialização do Prisma
┃ ┣ routes/ # Definição das rotas
┃ ┣ app.ts # Instância principal do Fastify
┃ ┗ server.ts # Ponto de entrada da aplicação
┣ .env # Variáveis de ambiente
┣ docker-compose.yml # Configuração do PostgreSQL
┣ package.json
┗ tsconfig.json


---

## ⚙️ Pré-requisitos

- Node.js >= 18
- Docker + Docker Compose

---

## 📦 Instalação e Configuração

# 1. Clonar o repositório
git clone https://github.com/natanloc/finance-app.git

# 2. Instalar dependências
npm install

# 3. Subir banco de dados (PostgreSQL) via Docker
docker-compose up -d

# 4. Criar o arquivo .env com as variáveis de ambiente
DATABASE_URL="postgresql://docker:docker@localhost:4321/financeapp

# 5. Executar migrations do Prisma
npx prisma migrate dev --name init

# 6. Rodar servidor em modo desenvolvimento
npm run start:dev
