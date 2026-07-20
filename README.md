# Catalyst Link - Project Alpha

## Prerequisites

Before you begin, ensure you have the following installed:

- Runtime Environment [Node.js (>=22.14.0)](https://nodejs.org)
- Package manager: [bun (>=1.3.8)](https://bun.com)

Optional, but recommended:

- Version Control [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) or any modern IDE with Vue support

## Usage

### Installations

Install Dependencies

```bash
bun install
```

### Development

Run the development server and visit https://localhost:8000 (Configurable in .env file)

```bash
bun dev
```

### Build

To build the application using production env, run the following command

```bash
bun build
```

To build the application using development env, run the following command

```bash
bun build:development
```

To build the application using production env, run the following command

```bash
bun build:production
```

### Testing

To run tests, run the following command

```bash
bun coverage
```

Or you want to test based on UI, run the following command

```bash
bun run coverage:preview
```

### Linting

To lint your code and automatically fix the issues, run the following command

```bash
bun lint:fix
```

### Commit your changes

To commit your changes (ensure your changes are already staged):

```bash
git add .
bun commit
```

## Version Management

The project includes scripts for version management:

- Update `patch` version:

```bash
bun bump:patch
```

- Update `minor` version:

```bash
bun bump:minor
```

- Update `major` version:

```bash
bun bump:major
```

## Contributing

1. Create a feature branch following the naming convention:

```
[feature/fix/hotfix/defect]/_[branch_name]
```

Example: `feat/auth-add-user-management`

2. Make your changes and commit them following the commit message format using this script:

```bash
bun commit
```

3. Submit a pull request with `development` as the base branch.
4. Every time a pull request is merged into the `development` branch, the application is automatically deployed to this [server](https://project-alpha-fe-development.netlify.app/).

## Production Deployment Guide

1. Add all next release features in `staging` branch
2. Submit a pull request to branch `main`
3. Merge the pull request
4. Add tag on the merge commit with tag name as same as with version number of project
   Example: If the project version is 1.102.14, the tag should be `v1.102.14`
5. Push the tag to remote repository

## Project Structure

```
vpg/
├── .husky/                      # Git hooks for enforcing code quality
├── .vscode/                     # VS Code specific settings
├── environments                 # Environment configuration files
├── public/                      # Static assets
├── src/                         # Source code
│   ├── core/                    # Shared resource non feature-specific source
│   │   ├── builders/            # Non Feature-specific builders
│   │   ├── components/          # Non Feature-specific components
│   │   │   ├── base/            # Non Feature-specific base components
│   │   │   ├── blocks/          # Non Feature-specific blocks components
│   │   │   ├── fragments/       # Non Feature-specific fragments components
│   │   │   ├── layouts/         # Non Feature-specific layouts components
│   │   ├── composables/         # Non Feature-specific composables
│   │   ├── constants/           # Non Feature-specific constants
│   │   ├── endpoints/           # Non Feature-specific endpoints
│   │   ├── exceptions/          # Non Feature-specific exceptions
│   │   ├── locales/             # App dictionary configuration
│   │   ├── pages/               # Common pages (404, index, etc.)
│   │   ├── plugins/             # Vue installer plugin configuration
│   │   ├── services/            # Non Feature-specific services
│   │   ├── stores/              # Non Feature-specific stores
│   │   ├── styles/              # Non Feature-specific styles
│   │   ├── types/               # Non Feature-specific types
│   │   └── utils/               # Non Feature-specific utilities
│   ├── modules/                 # Feature-based modules
│   │   └── example/             # Example feature
│   │   │   ├── builders/        # Example feature builders
│   │   │   ├── components/      # Example feature components
│   │   │   │   ├── base/        # Example feature base components
│   │   │   │   ├── blocks/      # Example feature blocks components
│   │   │   │   ├── fragments/   # Example feature fragments components
│   │   │   │   ├── layouts/     # Example feature layouts components
│   │   │   ├── composables/     # Example feature composables
│   │   │   ├── constants/       # Example feature constants
│   │   │   ├── endpoints/       # Example feature endpoints
│   │   │   ├── exceptions/      # Example feature exceptions
│   │   │   ├── pages/           # Example feature pages
│   │   │   ├── services/        # Example feature services
│   │   │   ├── stores/          # Example feature stores
│   │   │   ├── styles/          # Example feature styles
│   │   │   ├── types/           # Example feature types
│   │   │   └── utils/           # Example feature utilities
│   ├── App.vue                  # Main application component
│   ├── import.map.d.ts          # Auto import declarations
│   ├── component.map.d.ts       # Auto import Component declarations
│   ├── main.ts                  # Application entry point
│   ├── route.map.d.ts           # Auto Import Application routing declarations
│   └── yup.d.ts                 # Auto Import validation declarations
├── .czrc                        # Commitizen configuration
├── .gitignore                   # Git ignore rules
├── .versionrc                   # Version control configuration
├── bun.lock                     # bun dependencies version snapshot
├── CHANGELOG.md                 # Release version documentation
├── commitlint.config.js         # Commit linting rules
├── components.json              # Shadcn component rules configuration
├── env.d.ts                     # Global Vite type declarations
├── eslint.config.mjs            # ESLint configuration
├── index.html                   # HTML entry point
├── netlify.toml                 # Netlify CI/CD configuration
├── package.json                 # Project dependencies and scripts
├── README.md                    # Main project documentation
├── tsconfig.app.json            # App-specific TypeScript configuration
├── tsconfig.json                # TypeScript configuration
├── tsconfig.node.json           # Node-specific TypeScript configuration
├── vite.config.ts               # Vite bundler configuration
└── vitest.config.ts             # Vitest bundler configuration
```
