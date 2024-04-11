# JS guild: Monorepos

Juho Härme 19.4.2024

## Getting started

`git clone https://github.com/knowit-finland-javascript-guild/turborepo.git`

```
├── non-mono
│   ├── back
│   ├── component-library
│   ├── front
│   └── utility-library

```

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

## Hands-on 3: Installing a new package

## Hands-on 4: Using turbo
