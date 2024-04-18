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
├── mono

```

```bash
cd non-mono

cd component-library
npm install
cd ../front
npm install
cd ../back
npm install

# OR just
# NOTE: the following only works in BASH, not e.g. powershell

cd non-mono/
for pkg in */; do cd $pkg && npm install && cd ..;done

```

```bash

cd non-mono/front
npm run dev

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

## My monorepo story

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

## Project structure at ./non-mono

<br>

<v-clicks>

- Front end running at `/non-mono/front`
- Imports a `CustomButton` component from a package called `component-library`

</v-clicks>

<v-clicks>

```json
{
  "name": "front",
  ...
  "dependencies": {
    "component-library": "file:../component-library/component-library-1.0.0.tgz"
  }
}

```



```ts 


// src/main.ts
import "./style.css";
import { CustomButton } from "component-library";



```


</v-clicks>


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
cd ../mono
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
cd apps/front
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

# make changes to button at 
# packages/component-library/index.ts


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
layout: two-cols
---

## Running all the microservices in the monorepo

<br/>

```
# Open a new shell

cd apps/back
npm run dev

```

<br/>

```
# Open another new shell

cd packages/utility-library
npm run dev

```

::right::

<v-clicks>

## What do we have?

</v-clicks>

<br>

<v-clicks>

1. UI running at `mono/apps/front` 
2. API running at `mono/apps/back` 
3. Utility library running at `mono/packages/utility-library`


</v-clicks>


---
layout: fact
---

# Turbo? Nx? Lerna?

---

# Hands-on 3

<v-click>

*Managing tasks in a monorepo*

</v-click>

<v-clicks>

### Task: Use turbo to run all the dev tasks with one command

</v-clicks>

<br/>

<v-clicks>

Shut down the `npm run dev` processes that were spun up in the previous step.

1. Create a file called `turbo.json` at the root level (`./mono`):

```json
{
  "pipeline": {
    "dev": {}
  }
}

```

2. run `npx turbo run dev`


</v-clicks>

---


# What can be configured?

https://turbo.build/repo/docs/reference/configuration

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"]
    },
    "test": {
      "outputs": ["coverage/**"],
      "dependsOn": ["build"],
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts"],
      "outputMode": "full"
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}

```


---

## Task: Install a new package

<v-clicks>

```bash

# ./mono

npm install --workspace front cowsay
npm ls

mono@0.0.0 /private/tmp/turborepo/mono
├─┬ back@1.0.0 -> ./apps/back
│...
├─┬ component-library@1.0.0 -> ./packages/component-library
│ └...
├─┬ front@0.0.0 -> ./apps/front
│ ├── component-library@1.0.0 deduped -> ./packages/component-library
│ ├── cowsay@1.6.0
...

```

- alter the code at `mono/apps/front/src/main.ts` to use 

```ts
import {say} from 'cowsay'

//...

output.textContent = say({ text: json.result });

```


</v-clicks>

---
layout: fact
---

❓What happens if you install without `--workspace` ?

---

# Recap

<v-clicks>

- Multiple microservices 
- Multiple shared internal packages used by the services
- Npm managing the package installation process
- Turbo (etc) orchestrating the different tasks


</v-clicks>

<v-clicks>

## Next steps

</v-clicks>

<v-clicks>

- How to deploy?
- Publishing the internal packages
- Sharing configs across the packages
- Pnpm? Yarn? Bun?

</v-clicks>

---

# Resources

- https://github.com/vercel/turbo/tree/main/examples
    - https://github.com/vercel/turbo/tree/main/examples/with-docker
- https://docs.npmjs.com/cli/v10/using-npm/workspaces

- https://fi.wikipedia.org/wiki/Kontinkieli


<!--

## META:

- Jokainen voi tehdä tahollaan, ja vetäjän johdolla ollaan yksi taho?

-->
