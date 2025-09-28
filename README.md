# Aplicação Next.js

Uma aplicação web moderna construída com Next.js 15, React 19 e Tailwind CSS 4.

## Tecnologias Utilizadas

- **Next.js 15.5.4** - Framework React para produção
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **Tailwind CSS 4.1.13** - Framework CSS utilitário
- **TypeScript** - Tipagem estática (configuração presente)
- **shadcn/ui** - Componentes de interface reutilizáveis
- **Lucide React** - Biblioteca de ícones
- **React Icons** - Coleção adicional de ícones

## Recursos Destacados

### Estilização e Interface
- Tailwind CSS com configuração customizada
- Sistema de cores baseado em variáveis CSS
- Componentes shadcn/ui integrados
- Suporte a ícones via Lucide React e React Icons
- Tema configurável (New York style)

### Funcionalidades de Cores
- **color-name-list** - Lista abrangente de nomes de cores
- **color-namer** - Identificação automática de nomes de cores
- **nearest-color** - Localização da cor mais próxima
- **chroma-js** - Manipulação avançada de cores

### Desenvolvimento
- ESLint configurado para Next.js
- Suporte completo ao TypeScript
- Hot reload durante desenvolvimento
- Otimização automática de imagens com Sharp

## Pré-requisitos

- Node.js 18.18.0 ou superior
- npm, yarn, pnpm ou bun

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd <nome-da-pasta>
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## Scripts Disponíveis

```bash
# Executar em modo de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Executar versão de produção
npm run start

# Executar linter
npm run lint
```

## Estrutura do Projeto

```
├── src/
│   ├── components/     # Componentes React
│   │   └── ui/        # Componentes shadcn/ui
│   ├── styles/        # Arquivos de estilo
│   │   └── globals.css
│   ├── lib/           # Utilitários e configurações
│   └── hooks/         # Custom hooks
├── public/            # Arquivos estáticos
└── pages/            # Páginas da aplicação (se usando Pages Router)
```

## Configuração do Tailwind CSS

A aplicação utiliza Tailwind CSS 4 com as seguintes configurações:
- Estilo: New York
- Cores base: Neutral
- Variáveis CSS habilitadas
- PostCSS integrado

## Desenvolvimento

O projeto está configurado para desenvolvimento com:
- Recarga automática (hot reload)
- Linting automático
- Suporte a TypeScript
- Otimização de imagens

Para começar a desenvolver:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## Funcionalidades de Cores

Esta aplicação parece ter foco especial em manipulação de cores, oferecendo:
- Identificação automática de nomes de cores
- Busca por cores similares
- Manipulação e transformação de cores
- Interface rica para trabalhar com paletas de cores

## Build e Deploy

Para fazer o build de produção:

```bash
npm run build
npm run start
```

## Suporte a Navegadores

- Navegadores modernos com suporte a ES6+
- Otimizado para performance em dispositivos móveis e desktop

## Contribuição

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença [especificar licença].

---

Desenvolvido com Next.js e React