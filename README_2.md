# Setup da Aplicação Node.js + Next.js

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

## Instalação

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=postgresql://user:password@localhost:5432/database
JWT_SECRET=your-jwt-secret-here
```

## Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```
Inicia o servidor de desenvolvimento em `http://localhost:3000`

### Build
```bash
npm run build
# ou
yarn build
```
Cria a versão otimizada para produção

### Iniciar em produção
```bash
npm start
# ou
yarn start
```

### Linting
```bash
npm run lint
# ou
yarn lint
```

### Testes
```bash
npm test
# ou
yarn test
```

## Estrutura do Projeto

```
├── pages/              # Páginas da aplicação
├── components/         # Componentes reutilizáveis
├── styles/            # Arquivos CSS/SCSS
├── public/            # Arquivos estáticos
├── lib/               # Utilitários e configurações
├── api/               # Rotas da API
└── types/             # Definições de tipos TypeScript
```

## Tecnologias Utilizadas

- **Next.js** - Framework React
- **React** - Biblioteca para interfaces
- **TypeScript** - Superset do JavaScript
- **Tailwind CSS** - Framework CSS
- **Prisma** - ORM para banco de dados
- **NextAuth.js** - Autenticação

## Deploy

### Vercel (recomendado)
1. Faça push do código para GitHub
2. Conecte o repositório no Vercel
3. Configure as variáveis de ambiente
4. Deploy automático

### Docker
```bash
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
```

## Troubleshooting

### Erro de porta em uso
```bash
lsof -ti:3000 | xargs kill -9
```

### Limpar cache
```bash
rm -rf .next
npm run build
```

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request