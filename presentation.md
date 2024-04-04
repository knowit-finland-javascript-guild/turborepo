# Intro

- Starting with a monorepo vs converting something into a monorepo
- a) converting a monolith into a monorepo
- b) converting a bunch of microservices + packages into a monorepo

# Some of my monorepo story

very briefly, but to give the reason for why I'm into this

- over 10 individual repositories
- common ui elements from 2 different packages

# Facing the problem

Exercise 1: make a change to the imported component and see how tedious it is

> UX team wants the button to be RED!

```
cd non-mono/component-library/

# make changes to button at index.ts

npm version patch
npm pack
cd ../front
npm install ../component-library/component-library-1.0.1.tgz

```

# Solution

## Info

Some important concepts

- workspace vs root
- internal vs external
- published vs non-published
- versioning
- deploying an individual microservice?

## Hands on

Exercise 2: convert the hole thing to a monorepo

# Problem 2

Exercise 3:

1. install a new external package
2. remove the external package

## Additional monorepo packages

- eslint
- prettier
- tsconfig

# Some important concepts

- What is actually happening? Symlinks
- hoisting packages
- When does a package reside in app/node_modules? When in root/node_modules?
- Needing to use something like vite/babel
- Adding new workspaces

Exercise 4:

# Things to consider

- how to install new external packages?
  - harmonizing
- editor support
- using turbo etc to boost the workflow
- converting with git history retained

# Resources

<!--

## META:

- Jokainen voi tehdä tahollaan, ja vetäjän johdolla ollaan yksi taho?

-->
