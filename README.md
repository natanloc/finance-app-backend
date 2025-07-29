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

## ⚙️ Pré-requisitos

- Node.js >= 18
- Docker + Docker Compose

---

## 📦 Instalação e Configuração

# 1. Clonar o repositório
git clone https://github.com/natanloc/finance-app-backend.git

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
