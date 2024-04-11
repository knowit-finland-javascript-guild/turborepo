---
layout:cover
---

# JS guild: Monorepos

Juho Härme 19.4.2024

---
layout: two-cols
---

`git clone https://github.com/knowit-finland-javascript-guild/turborepo.git`


```
├── non-mono
│   ├── back
│   ├── component-library
│   ├── front
│   └── utility-library

```
<br/>

```bash
cd back
npm install
cd ../component-library
npm install
cd ../front
npm install

# OR just

cd mon-mono/
for pkg in */; do cd $pkg && npm install && cd ..;done

```

::right::


<v-clicks>

## Intro

</v-clicks>

<v-clicks>

- Mono? Poly? Monolith? Microservices? Packages?
- Starting with a monorepo vs converting something into a monorepo
- a) converting a monolith into a monorepo
- b) converting a bunch of microservices + packages into a monorepo

</v-clicks>

<br/>

<v-clicks>

## Some of my monorepo story

</v-clicks>

<!-- very briefly, but to give the reason for why I'm into this -->

<v-clicks>


- over 10 individual repositories
- common ui elements from 2 different packages
- general shared code from 2 different packages
- types from a separate package...

</v-clicks>

---
layout: fact
---

# The problem with packages in polyrepo

---

# Hands-on 1 

<v-clicks>

Make a change to a component imported from an internal package


<div>
<div class='speech-bubble'>

Please make the button hot pink ☺️

Best wishes,
UX team

</div>

![Ux team](/avatar-svgrepo-com.svg)

</div>

</v-clicks>

---
layout: two-cols
---


<div>
<div class='speech-bubble'>

C'mon, such a small change, it'll be up in a minute?


</div>

![Ux team](/avatar-svgrepo-com.svg)
</div>


::right::

<v-clicks>


```
cd front
npm run dev

.....

├── component-library
│   ├── ...
│   ├── index.ts
├── front
│   ├── ...
│   ├── src
│   │   ├── counter.ts
│   │   ├── main.ts

```

<br/>

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
layout: fact
---

# How could a monorepo make this easier?

---
layout: two-cols
---


Prerequisistes for the next hands-on exercise

<br />

```
cd mono
npm install

```

::right::

<v-clicks>

## Some important concepts

</v-clicks>

<v-clicks>

- workspace vs root

```
root
├── package.json
├── package-lock.json
├── node_modules
├── workspace 1
│   ├── package.json
├── workspace 2
│   ├── package.json

```
</v-clicks>

<v-clicks>

- internal vs external
- published vs non-published
- versioning
- deploying an individual microservice?

</v-clicks>






---

# Hands-on 2 

<v-click>

*using shared packages in a monorepo*

</v-click>

<v-clicks>

<div>

<div class='speech-bubble2'>
Just kidding, make it light blue instead! 😘

Warmest wishes,
UX
</div>

![Ux team](/avatar-svgrepo-com.svg)

</div>

</v-clicks>

---
layout: two-cols
---

<div>

<div class='speech-bubble2'>
We might want to change this again in the future...
</div>

![Ux team](/avatar-svgrepo-com.svg)

</div>

::right::

stuff

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
