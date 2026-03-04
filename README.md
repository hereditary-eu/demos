![The HEREDITARY Project](https://hereditary-project.eu/wp-content/uploads/2024/04/Hereditary_Vertical_primary-1.png)

Our goal is to change the way we approach healthcare by unlocking insights that were previously impossible to obtain

HEREDITARY aims to improve disease detection, treatment response preparation, and medical knowledge exploration through an integrated framework that incorporates diverse health data, including genetics, while ensuring privacy compliance.

Its five-layered structure enables advanced federated analytics to uncover new insights into neurodegenerative and gut microbiome-related disorders.

By harmonizing clinical, genomic, and environmental data on a large scale, HEREDITARY seeks to empower clinicians, researchers, and policymakers to develop more effective treatment and diagnosis strategies.

# Hereditary Demo Components

This repository contains links, images and references to our demo components.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## Project Structure

Inside the (Astro + Starlight) project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Specifically for content, check the `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command       | Action                                      |
| :------------ | :------------------------------------------ |
| `bun install` | Installs dependencies                       |
| `bun dev`     | Starts local dev server at `localhost:4321` |

Each commit to the `master` branch is automatically deployed.
