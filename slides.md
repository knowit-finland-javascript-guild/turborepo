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

cd non-mono/
for pkg in */; do cd $pkg && npm install && cd ..;done

```

::right::


<v-clicks>

## Intro

</v-clicks>

<!--
In version-control systems, a monorepo is a software-development strategy in which the code for a number of projects is stored in the same repository.
-->

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
cd non-mono/front
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

<v-clicks>


```
cd mono/apps/front
npm run dev

.....

├── apps
│   └── front
│       ├── src
│       │   ├── main.ts
└── packages
    └── component-library
        ├── index.ts

```

<br/>

```
cd mono/packages/component-library

# make changes to button at index.ts


```

</v-clicks>

---
layout: two-cols
---

## How does this work?


<v-clicks>

```bash

# ./mono

npm ls

mono@0.0.0 /Users/juhhar/guilds/monorepo/mono
├─┬ component-library@1.0.0 -> ./packages/component-library
│ └── typescript@5.4.5
└─┬ front@0.0.0 -> ./apps/front
  ├── component-library@1.0.0 deduped -> ./packages/component-library
  ├── typescript@5.4.5 deduped
  └── vite@5.2.8


```

```bash

├── node_modules
├── apps
│   └── front
└── packages
    └── component-library

```


</v-clicks>

::right::

<v-clicks>

```bash

#./node_modules

front@ -> ../apps/front
component-library@ -> ../packages/component-library

```

</v-clicks>

---

## Installing a new package


<v-clicks>

```bash

# ./mono

npm install --workspace front cowsay

```

```bash
mono@0.0.0 /Users/juhhar/guilds/monorepo/mono
├─┬ component-library@1.0.0 -> ./packages/component-library
│ └── typescript@5.4.5
└─┬ front@0.0.0 -> ./apps/front
  ├── component-library@1.0.0 deduped -> ./packages/component-library
  ├── cowsay@1.6.0
  ├── typescript@5.4.5 deduped
  └── vite@5.2.8

```

</v-clicks>

---
layout: fact
---

❓What happens if you install without `--workspace` ?

---


---
layout: fact
---

# Turbo? Nx? Lerna?

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
