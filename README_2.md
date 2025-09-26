# Setup - Aplicação Node.js com Next.js

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nome-do-projeto
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```
DATABASE_URL="your-database-url"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run test` - Executa os testes

## Estrutura do Projeto

```
/
├── pages/          # Páginas da aplicação
├── components/     # Componentes reutilizáveis
├── lib/           # Utilitários e configurações
├── public/        # Arquivos estáticos
├── styles/        # Arquivos de estilo
└── api/           # Rotas da API
```

## Desenvolvimento

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Acesse http://localhost:3000 no seu navegador

## Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente no dashboard
3. Deploy automático a cada push na branch main

### Docker

```bash
docker build -t minha-app .
docker run -p 3000:3000 minha-app
```

## Tecnologias Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Prisma (ORM)
- NextAuth.js (Autenticação)