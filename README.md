# The Wizarding Archive

[English](README.md) | [Português](README.pt-BR.md) | [Español](README.es.md)

Explore the witches, wizards, and magical creatures of the Harry Potter universe.

The Wizarding Archive is a responsive character catalog built with Next.js and TypeScript. It consumes a public REST API to display character information, allowing users to explore and filter the magical world through a clean and accessible interface.

## Live Demo

[The Wizarding Archive](https://harry-potter-landing-rho.vercel.app/)

## Features

- **Character catalog:** Browse characters from the Harry Potter universe.
- **Character profiles:** View character images, names, dates of birth, Hogwarts houses, Patronuses, actors, and status.
- **Search:** Find characters by name.
- **House filters:** Filter characters by Gryffindor, Slytherin, Ravenclaw, or Hufflepuff.
- **Status filters:** Filter characters by alive or deceased status.
- **Combined filtering:** Apply multiple filters simultaneously.
- **Responsive layout:** Adapted for desktop, tablet, and mobile devices.
- **Loading and error states:** Provide feedback while data is loading or when a request fails.
- **SEO and social sharing:** Metadata and an Open Graph image for improved search and sharing previews.
- **Loading and Error States:** Dedicated loading UI with Next.js `loading.tsx` and error handling with `error.tsx`, providing feedback during asynchronous operations and a recovery mechanism when rendering fails.

## Tech Stack

| Technology  | Purpose                                      |
| ----------- | -------------------------------------------- |
| Next.js 16  | React framework and application architecture |
| React 19    | Component-based user interface               |
| TypeScript  | Static typing                                |
| SCSS / Sass | Styling and modular stylesheets              |
| REST API    | Character data source                        |
| Fetch API   | HTTP requests                                |
| pnpm        | Package management                           |
| ESLint      | Code linting                                 |
| Prettier    | Code formatting                              |

## Architecture

The project uses the Next.js App Router and organizes code by responsibility.

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

### Key technical decisions

**Server and Client Components**

The character data is fetched in a Server Component. Interactive functionality, such as search and filtering, is handled by a Client Component.

This keeps the initial data request on the server while allowing users to interact with the catalog without making additional API requests for every filter change.

**Service layer**

API communication is isolated in `src/services/characters/characters.service.ts`, keeping data-fetching logic separate from presentation components.

**Data caching**

The native Fetch API uses Next.js revalidation with a one-hour interval:

```typescript
fetch(CHARACTERS_API_URL, {
  next: {
    revalidate: 3600,
  },
});
```

This reduces unnecessary requests while allowing character data to be refreshed periodically.

**Image optimization**

The application uses Next.js `Image` to optimize remote character images. Missing images are handled with a fallback interface.

**Styling**

SCSS Modules provide component-level style isolation, while global design tokens define colors, typography, spacing, and other shared values.

## Getting Started

### Prerequisites

- Node.js 26.x
- pnpm 9.15.9

### Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Navigate to the project directory:

```bash
cd harry-potter-landing
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command             | Description                               |
| ------------------- | ----------------------------------------- |
| `pnpm dev`          | Starts the development server             |
| `pnpm build`        | Creates a production build                |
| `pnpm start`        | Starts the production server              |
| `pnpm lint`         | Runs ESLint                               |
| `pnpm format`       | Formats project files with Prettier       |
| `pnpm format:check` | Checks formatting without modifying files |

## API Reference

Character data is provided by the [Harry Potter API](https://hp-api.onrender.com/).

**Endpoint:**

```text
GET https://hp-api.onrender.com/api/characters
```

The application retrieves character information and uses the following fields:

- `id`
- `name`
- `image`
- `dateOfBirth`
- `house`
- `patronus`
- `actor`
- `alive`

Some API fields may be unavailable for certain characters. The interface handles missing information with fallback values.

## Future Improvements

- Add character sorting options.
- Improve filtering with additional character attributes.
- Add automated tests.
- Enhance character details with dedicated profile pages.
- Add further performance and accessibility improvements.

## License

This project was created as a technical challenge and for learning purposes.
