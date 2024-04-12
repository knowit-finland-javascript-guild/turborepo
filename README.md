# JS guild: Monorepos

Juho Härme 19.4.2024

## Getting started

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

cd non-mono/
for pkg in */; do cd $pkg && npm install && cd ..;done

```

```bash

cd non-mono/front
npm run dev

```

## Hands-on 1: without a monorepo

Make a change to a component imported from an internal package

> Please make the button hot pink ☺️
>
> Best wishes,
> UX team

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

```

#1. Make changes to: non-mono/component-library/index.ts

#2. Then publish the package:

npm version patch
npm pack
cd ../front
npm install ../component-library/component-library-1.0.1.tgz

```

## Hands-on 2: with a monorepo

Prerequisistes:

```
cd mono
npm install

```

> Just kidding, make the button Light blue instead! 😘
>
> Warmest wishes,
> UX

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

```

# make changes to button at mono/packages/component-library/index.ts


```

### Running all the microservices in the monorepo


```
# Open a new shell

cd mono/apps/back
npm run dev

```


```
# Open another new shell

cd mono/packages/utility-library
npm run dev

```


## Hands-on 3: using turborepo



1. Create a file called `turbo.json` at the root level:

```json
{
  "pipeline": {
    "dev": {}
  }
}

```

2. run `npx turbo run dev`


### Installing a new package


```bash

# ./mono

npm install --workspace front cowsay


```

```ts

// inside mono/apps/front/src/main.ts

import { say } from "cowsay";

//...

${say({ text: resul })}

//...

```


