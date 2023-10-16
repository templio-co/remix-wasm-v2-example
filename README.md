# remix-wasm-v2-example

# Remix v2 + WASM

A starter to get you up and going with WASM in Remix v2.

## What's inside?

**This repo is an updated version of [remix-wasm-example by Jacob Ebey](https://github.com/jacob-ebey/remix-wasm-example) which uses Remix v1.13.**

This repo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Packages

- `packages/remix-app`: a [Remix](https://remix.run/) application that makes up the public facing UX
- `packages/rust-functions`: a [Rust](https://www.rust-lang.org/) library for triggering a browser alert and/or an add function
- `packages/server`: an ESM Node.js server that brings everything together for deployment
- `config/eslint-config-custom`: shared eslint config that includes `@remix-run/eslint-config` and `prettier`
- `config/tsconfig`: base tsconfig that other packages inherit from

Each `package/*` is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Github Actions](https://github.com/features/actions)

## Setup

Clone and install dependencies:

```
npm i
```

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
