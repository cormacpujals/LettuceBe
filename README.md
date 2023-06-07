# LettuceBe

Proof of concept app built with a cross-functional team of four designers and three engineers with Next.js, a JavaScript metaframework built on top of React.

[Presentation Slides](https://docs.google.com/presentation/d/13rEPA3gOJQtsT0cWx9619dHNRmCQGGt27yc8NnducQU/edit#slide=id.g1f5eefbdc57_0_45)

# Developer notes

## Database

https://cloud.mongodb.com/v2/6328ba687732180fd73bdc9a

1. If you don't have access, ask Cormac to add you to the access page at
   https://cloud.mongodb.com/v2/6328ba687732180fd73bdc9a#/access

2. Add a username for yourself and an auto-generated password, and use the
   Built-in Role for read and write access to any database on this page:
   https://cloud.mongodb.com/v2/6328ba687732180fd73bdc9a#/security/database/users

3. You will need both an `.env` for tests and scripts and a `.env.local` for the Next.js app.

Replace USER and PASSWORD (note that USER shows up in two places for `DB_TEST_URI` (so
your tests don't conflict with other dev's tests):

.env

```text
# Keep .env and .env.local in sync!
# .env.local is used by the Next.js app
# .env is used by dotenv for
#   jest unit tests (loaded implicitly using jest.config.js)
#   npm run seed (loaded explicitly)
#
DB_URI=mongodb+srv://USER:PASSWORD@demo.cqowzef.mongodb.net/food?retryWrites=true&w=majority
DB_TEST_URI=mongodb+srv://USER:PASSWORD@demo.cqowzef.mongodb.net/USER?retryWrites=true&w=majority
```

.env.local

```text
# Keep .env and .env.local in sync!
# .env.local is used by the Next.js app
# .env is used by dotenv for
#   jest unit tests (loaded implicitly using jest.config.js)
#   npm run seed (loaded explicitly)
#
DB_URI=mongodb+srv://USER:PASSWORD@demo.cqowzef.mongodb.net/food?retryWrites=true&w=majority
DB_TEST_URI=mongodb+srv://USER:PASSWORD@demo.cqowzef.mongodb.net/USER?retryWrites=true&w=majority
```

## Run tests:

`pnpm test`

## Run dev server:

pnpm dev
