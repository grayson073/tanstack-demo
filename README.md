# Project README

## Overview

This project is a modern React application built with TanStack tools, MUI components, and TypeScript. At the time this
repository was created, all of TanStack was completely new to me. As such, I chose to explore TanStack Start since they
are
getting very close to moving out of beta and offer a wide variety of features that I was able to learn about along
the way. This allowed me to get the latest experience of the stack, including the popular TanStack Router and TanStack
Query.

The application is a simple image gallery that allows users to search for images using the Imgur API. See below for
details on more details on chosen third-party libraries.

## Dependencies

### Production Dependencies & Reasons for Selection

- **@emotion/styled (^11.14.0)**: Provides CSS-in-JS styling capabilities with Emotion, enabling styled components with
  robust theming.

- **@mui/material (^6.4.5)**: A comprehensive UI component library that follows Material Design principles for creating
  polished, accessible interfaces and allows for excellent composition.

- **@tanstack/start (^1.109.2)**: New to me. An opinionated starter framework that integrates TanStack libraries for a
  cohesive development experience. They do not anticipate any more breaking changes as they move out of Beta so I wanted
  to try out the "full" TanStack experience.

- **lucide-react (^0.475.0)**: New to me. A collection of beautiful open source icons as React components that I wanted
  to compare against MUI icons.

- **zod (^3.24.2)**: New to me. TypeScript-first schema validation library that ensures runtime type safety for data.

### Development Dependencies

- **ESLint Configuration**: Code quality tools including `eslint`, `@eslint/js`, and various plugins for React and
  TypeScript.

- **Prettier**: Code formatting tools with `prettier` and related plugins for consistent code style.

- **Git Hooks**: Uses `husky` and `lint-staged` to enforce code quality checks before commits.

## Getting Started

1. Clone the repository
2. Rename .env.example to .env and fill in the necessary values (i.e. VITE_IMGUR_CLIENT_ID)
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts

- `dev`: Starts the development server
- `build`: Creates a production build
- `lint`: Runs ESLint to check code quality
- `format`: Runs Prettier to format code
