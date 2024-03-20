# Fullstack Notion Clone with React, NextJS, TailwindCSS & Convex

![notion](https://github.com/blaadrain/notion-clone/assets/96272057/4646a18e-e1ee-43f7-9f45-f10253b05cc5)

Key Features:

- Real-time database 🔗
- Notion-style editor 📝
- Light and Dark mode 🌓
- Infinite children documents 🌲
- Trash can & soft delete 🗑️
- Authentication 🔐
- File upload, deletion, replacement
- Expandable sidebar
- Full mobile responsiveness 📱
- Publish your note to the web 🌐
- Fully collapsable sidebar
- Landing page 🛬
- Icons & cover image of each document 🖼️
- Recover deleted files 🔄📄

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/blaadrain/notion-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Setup convex dev

```js
npx convex dev
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

