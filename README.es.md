# The Wizarding Archive

[English](README.md) | [Português](README.pt-BR.md) | [Español](README.es.md)

Explora a las brujas, los magos y las criaturas mágicas del universo de Harry Potter.

The Wizarding Archive es un catálogo responsivo de personajes desarrollado con Next.js y TypeScript. La aplicación consume una API REST pública para mostrar información sobre los personajes y permite explorar el mundo mágico a través de una interfaz intuitiva y accesible.

## Demo

[The Wizarding Archive](https://harry-potter-landing-rho.vercel.app/)

## Funcionalidades

- **Catálogo de personajes:** explora personajes del universo de Harry Potter.
- **Información de los personajes:** consulta imágenes, nombres, fechas de nacimiento, casas de Hogwarts, Patronus, actores y estado.
- **Búsqueda:** encuentra personajes por nombre.
- **Filtro por casa:** filtra por Gryffindor, Slytherin, Ravenclaw o Hufflepuff.
- **Filtro por estado:** filtra personajes vivos o fallecidos.
- **Filtros combinados:** aplica varios filtros simultáneamente.
- **Diseño responsivo:** interfaz adaptada a escritorio, tabletas y dispositivos móviles.
- **SEO y compartir en redes sociales:** metadatos e imagen Open Graph para mejorar la presentación en buscadores y plataformas sociales.
- **Estados de Carga y Error:** Interfaces específicas mediante `loading.tsx` y `error.tsx` de Next.js, proporcionando información durante operaciones asíncronas y mecanismos de recuperación ante fallos de renderizado.

## Tecnologías utilizadas

| Tecnología  | Propósito                                          |
| ----------- | -------------------------------------------------- |
| Next.js 16  | Framework de React y arquitectura de la aplicación |
| React 19    | Construcción de la interfaz                        |
| TypeScript  | Tipado estático                                    |
| SCSS / Sass | Estilos y organización de hojas de estilo          |
| REST API    | Fuente de datos de los personajes                  |
| Fetch API   | Comunicación HTTP                                  |
| pnpm        | Gestión de dependencias                            |
| ESLint      | Análisis estático del código                       |
| Prettier    | Formateo del código                                |

## Arquitectura

El proyecto utiliza el App Router de Next.js y organiza el código según sus responsabilidades.

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

### Decisiones técnicas

**Server y Client Components**

Los datos de los personajes se obtienen en un Server Component. Las funcionalidades interactivas, como la búsqueda y los filtros, se gestionan mediante un Client Component.

Este enfoque mantiene la solicitud inicial en el servidor y permite interactuar con el catálogo sin realizar nuevas llamadas a la API cada vez que cambian los filtros.

**Capa de servicios**

La comunicación con la API está aislada en `src/services/characters/characters.service.ts`, separando la lógica de acceso a los datos de los componentes de presentación.

**Caché y revalidación**

La Fetch API nativa utiliza el mecanismo de revalidación de Next.js con un intervalo de una hora:

```typescript
fetch(CHARACTERS_API_URL, {
  next: {
    revalidate: 3600,
  },
});
```

Esto reduce las solicitudes innecesarias y permite actualizar periódicamente los datos de los personajes.

**Optimización de imágenes**

La aplicación utiliza el componente `Image` de Next.js para optimizar las imágenes remotas de los personajes. Cuando una imagen no está disponible, la interfaz muestra un elemento alternativo.

**Estilos**

Los SCSS Modules aíslan los estilos de cada componente, mientras que los tokens globales centralizan colores, tipografía, espaciados y otros valores compartidos.

## Cómo ejecutar el proyecto

### Requisitos previos

- Node.js 26.x
- pnpm 9.15.9

### Instalación

Clona el repositorio:

```bash
git clone https://github.com/developer-rolin/harry-potter-landing.git
```

Accede al directorio del proyecto:

```bash
cd harry-potter-landing
```

Instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts disponibles

| Comando             | Descripción                                     |
| ------------------- | ----------------------------------------------- |
| `pnpm dev`          | Inicia el servidor de desarrollo                |
| `pnpm build`        | Genera la build de producción                   |
| `pnpm start`        | Inicia el servidor de producción                |
| `pnpm lint`         | Ejecuta ESLint                                  |
| `pnpm format`       | Formatea los archivos con Prettier              |
| `pnpm format:check` | Comprueba el formato sin modificar los archivos |

## API

Los datos de los personajes provienen de la [Harry Potter API](https://hp-api.onrender.com/).

**Endpoint:**

```text
GET https://hp-api.onrender.com/api/characters
```

La aplicación utiliza los siguientes campos:

- `id`
- `name`
- `image`
- `dateOfBirth`
- `house`
- `patronus`
- `actor`
- `alive`

Algunos datos pueden no estar disponibles para determinados personajes. En esos casos, la interfaz muestra valores alternativos.

## Mejoras futuras

- Añadir opciones para ordenar los personajes.
- Ampliar los filtros con otros atributos.
- Implementar pruebas automatizadas.
- Crear páginas individuales con más información sobre cada personaje.
- Seguir mejorando el rendimiento y la accesibilidad.

## Licencia

Proyecto desarrollado como parte de un desafío técnico y con fines de aprendizaje.
