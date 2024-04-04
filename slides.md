# Intro

<v-clicks>

- Mono? Poly? Monolith? Microservices? Packages?
- Starting with a monorepo vs converting something into a monorepo
- a) converting a monolith into a monorepo
- b) converting a bunch of microservices + packages into a monorepo

</v-clicks>

---

# Some of my monorepo story

very briefly, but to give the reason for why I'm into this

<v-clicks>

- over 10 individual repositories
- common ui elements from 2 different packages

</v-clicks>

---

# The problem with packages in polyrepo

---

## Hands-on 1: using shared packages in a polyrepo

<v-clicks>

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

</v-clicks>

---

## How could a monorepo make this easier?

<v-clicks>

Some important concepts

- workspace vs root
- internal vs external
- published vs non-published
- versioning
- deploying an individual microservice?

</v-clicks>

---

## Hands-on 2: using shared packages in a monorepo

---

# Working in monorepo

---

## Hands-on 3: Installing a new package

---

## Hands-on 4: Shared configs

- eslint
- prettier
- tsconfig

---

# Some important concepts

- What is actually happening? Symlinks
- hoisting packages
- When does a package reside in app/node_modules? When in root/node_modules?
- Needing to use something like vite/babel
- Adding new workspaces

---

# Things to consider

- how to install new external packages?
  - harmonizing
- editor support
- converting with git history retained

---

## Hands-on 5: Using additional tools

Making running tasks easier with tools like turborepo

# Resources

<!--

## META:

- Jokainen voi tehdä tahollaan, ja vetäjän johdolla ollaan yksi taho?

-->
