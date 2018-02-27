# Frontend test

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project can be built and run with Docker with the command

```sh
docker-compose -f docker-compose-build.yml up
```

and then it will be served at http://localhost:8080/

## Development

For development `node` >= 8 is required.

Run the following commands

```sh
npm install

npm run start
```

or with `yarn`

```sh
yarn

yarn start
```

The app will be run in development mode at http://localhost:3000.

Then, to test the production build run

```sh
npm run build
```

or

```sh
yarn build
```

and

```sh
docker-compose up --build
```
