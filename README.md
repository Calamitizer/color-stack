# `color-stack`

## Deployment

This app looks for configuration in a file called `.env` — see `example.env` to reference the structure. If you're using an existing MongoDB, ensure `.env` points to it correctly. If you're launching a new instance with Docker, `example.env` can be used as-is (just copy it to `.env` first).

1. `cp example.env .env`
1. Launch a new MongoDB instance: `docker-compose up`
1. Install all packages: `yarn` or `npm install`
1. Deploy: `yarn deploy` or `npm run deploy`. This is an alias for
   - `yarn seed` - seed database from `db-seed/input.json`
   - `yarn client bundle:d` - run Webpack to bundle the front-end into `client/dist`
   - `yarn server start:d` - launch NestJS server (listening on port 3000 by default)

## Stack

- TypeScript
- Node
- NestJS
- React
- Webpack
- MongoDB

## API documentation

```txt
GET /people => {
  people: Array<{
    name: string,
    color: string,
    group: string,
  }>,
  elapsedMs: integer,
}
```

Return a list of people. Optional query strings: `color`, `name`.

```txt
POST /people (body: {
  name: string,
  color: string,
  group: string,
})
```

Create or update a person's information. The group is upserted by its name as well.

```txt
GET /colors => {
  colors: string[],
  elapsedMs: integer,
}
```

Return a sorted list of all colors associated to at least one person.

## API Assumptions

- I assumed that each person would belong to at most 1 group (based on "no duplication in person's name"). This let me store a reference to a person's group on the person document easily.
- In general, I pivoted the entire structure to focus on the `Person` document instead of the `Group` document. This was done upon careful reflection on the front-end requirements. All the client's functionality can be achieved with this simplification, since at the day the client is simply displaying a collection of people. Yet the document structure of `Group` is there, if needs to be developed further in the future.

## Final notes

- There's some progress towards containerization of the webapp in `Dockerfile`, `docker-compose.yml`, etc. It sort-of works, but I can't guarantee its stability, so the instructions above use Docker only for MongoDB and use `yarn` to launch the webapp on the host machine.
