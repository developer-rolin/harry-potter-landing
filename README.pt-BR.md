# The Wizarding Archive

[English](README.md) | [Português](README.pt-BR.md) | [Español](README.es.md)

Explore as bruxas, os bruxos e as criaturas mágicas do universo de Harry Potter.

O The Wizarding Archive é um catálogo responsivo de personagens desenvolvido com Next.js e TypeScript. A aplicação consome uma API REST pública para apresentar informações sobre os personagens e permite explorar o universo mágico por meio de uma interface intuitiva e acessível.

## Demonstração

[The Wizarding Archive](https://harry-potter-landing-rho.vercel.app/)

## Funcionalidades

- **Catálogo de personagens:** explore personagens do universo de Harry Potter.
- **Informações dos personagens:** consulte imagens, nomes, datas de nascimento, casas de Hogwarts, Patronos, atores e status.
- **Busca:** encontre personagens pelo nome.
- **Filtro por casa:** filtre por Grifinória, Sonserina, Corvinal ou Lufa-Lufa.
- **Filtro por status:** filtre personagens vivos ou falecidos.
- **Filtros combinados:** aplique diferentes filtros simultaneamente.
- **Layout responsivo:** interface adaptada para desktop, tablet e dispositivos móveis.
- **Estados de carregamento e erro:** feedback durante o carregamento dos dados e em caso de falha na requisição.
- **SEO e compartilhamento:** metadados e imagem Open Graph para melhorar a apresentação em mecanismos de busca e plataformas sociais.
- **Estados de Carregamento e Erro:** Interfaces dedicadas com `loading.tsx` e `error.tsx` do Next.js, oferecendo feedback durante operações assíncronas e mecanismos de recuperação em caso de falhas na renderização.

## Tecnologias utilizadas

| Tecnologia  | Finalidade                                 |
| ----------- | ------------------------------------------ |
| Next.js 16  | Framework React e arquitetura da aplicação |
| React 19    | Construção da interface                    |
| TypeScript  | Tipagem estática                           |
| SCSS / Sass | Estilização e organização dos estilos      |
| REST API    | Fonte dos dados dos personagens            |
| Fetch API   | Comunicação HTTP                           |
| pnpm        | Gerenciamento de dependências              |
| ESLint      | Análise estática do código                 |
| Prettier    | Formatação do código                       |

## Arquitetura

O projeto utiliza o App Router do Next.js e organiza o código de acordo com suas responsabilidades.

```text
src/
├── app/
│   ├── error.tsx
│   ├── loading.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.scss
│
├── components/
│   ├── layout/
│   │   └── Header/
│   │
│   └── sections/
│       ├── Hero/
│       └── Characters/
│           └── components/
│               ├── CharacterCard/
│               ├── CharacterCatalog/
│               └── CharacterFilters/
│
├── services/
│   └── characters/
│       └── characters.service.ts
│
├── styles/
│   ├── abstracts/
│   └── base/
│
└── types/
    └── character.ts
```

### Decisões técnicas

**Server e Client Components**

Os dados dos personagens são carregados em um Server Component. Já as funcionalidades interativas, como busca e filtros, são gerenciadas por um Client Component.

Essa abordagem mantém a requisição inicial no servidor e permite que os usuários interajam com o catálogo sem realizar novas chamadas à API a cada alteração dos filtros.

**Camada de serviços**

A comunicação com a API fica isolada em `src/services/characters/characters.service.ts`, mantendo a lógica de acesso aos dados separada dos componentes de apresentação.

**Cache e revalidação**

A Fetch API nativa utiliza o mecanismo de revalidação do Next.js com intervalo de uma hora:

```typescript
fetch(CHARACTERS_API_URL, {
  next: {
    revalidate: 3600,
  },
});
```

Isso reduz requisições desnecessárias e permite atualizar periodicamente os dados dos personagens.

**Otimização de imagens**

A aplicação utiliza o componente `Image` do Next.js para otimizar imagens remotas dos personagens. Quando uma imagem não está disponível, a interface apresenta um elemento alternativo.

**Estilização**

Os SCSS Modules isolam os estilos de cada componente, enquanto os tokens globais centralizam cores, tipografia, espaçamentos e outros valores compartilhados.

## Como executar o projeto

### Pré-requisitos

- Node.js 26.x
- pnpm 9.15.9

### Instalação

Clone o repositório:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Acesse a pasta do projeto:

```bash
cd harry-potter-landing
```

Instale as dependências:

```bash
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

| Comando             | Descrição                                       |
| ------------------- | ----------------------------------------------- |
| `pnpm dev`          | Inicia o servidor de desenvolvimento            |
| `pnpm build`        | Gera a build de produção                        |
| `pnpm start`        | Inicia o servidor de produção                   |
| `pnpm lint`         | Executa o ESLint                                |
| `pnpm format`       | Formata os arquivos com Prettier                |
| `pnpm format:check` | Verifica a formatação sem modificar os arquivos |

## API

Os dados dos personagens são fornecidos pela [Harry Potter API](https://hp-api.onrender.com/).

**Endpoint:**

```text
GET https://hp-api.onrender.com/api/characters
```

A aplicação utiliza os seguintes campos:

- `id`
- `name`
- `image`
- `dateOfBirth`
- `house`
- `patronus`
- `actor`
- `alive`

Algumas informações podem não estar disponíveis para determinados personagens. Nesses casos, a interface apresenta valores alternativos.

## Melhorias futuras

- Adicionar opções de ordenação dos personagens.
- Ampliar os filtros com outros atributos.
- Implementar testes automatizados.
- Criar páginas individuais com mais detalhes sobre cada personagem.
- Aprimorar ainda mais a performance e a acessibilidade.

## Licença

Projeto desenvolvido como parte de um desafio técnico e para fins de aprendizado.
