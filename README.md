# bth-ramverk2

[![Build Status](https://travis-ci.org/Nicklas766/bth-ramverk2.svg?branch=master)](https://travis-ci.org/Nicklas766/bth-ramverk2)
[![Maintainability](https://api.codeclimate.com/v1/badges/d6ec95ceea3b251a0444/maintainability)](https://codeclimate.com/github/Nicklas766/bth-ramverk2/maintainability)
[![Docker Build Status](https://img.shields.io/badge/Docker%20Build--blue.svg)](https://cloud.docker.com/swarm/nicklas766/repository/docker/nicklas766/my_image/general)

[![Build Status](https://scrutinizer-ci.com/g/Nicklas766/bth-ramverk2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/Nicklas766/bth-ramverk2/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Nicklas766/bth-ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Nicklas766/bth-ramverk2/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/Nicklas766/bth-ramverk2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/Nicklas766/bth-ramverk2/?branch=master)

This is my website for the course [ramverk2](https://dbwebb.se/kurser/ramverk2) at Blekinge Tekniska Högskola.

This project uses the following,

* Express.js (server)
* React      (client)
* MongoDB
* Socket.io
* Mocha
* Docker
* [Mongo-Connecter](https://www.npmjs.com/package/mongo-connecter) (my own npm module, nothing advanced just an exercise)


For more dependencies please checkout the `package.json`


## Basic setup

```
$ git clone https://github.com/Nicklas766/bth-ramverk2.git
$ cd bth-ramverk2
```

## Recommended setup & testing

**The easiest way to setup your own is to use Docker**:

```
// This will setup in the following order, mongodb, express-server, test.
$ npm run docker-build-start
```

**Only testing**:
```
// This will only start the test
$ npm run docker-build-start test
```

**Client**:
Since the express-server uses a `bundle.js` we can't update our code in realtime.
We can fix that however to avoid slow and annyoing restarts,
```
// Open a new terminal or use your current
$ cd client
// Edit the webpack.config.js and make sure the proxy is the same adress
// as your docker-container which contains the server
$ npm start
```

**Note**: If you want to use another port, you can easily edit the ports in
`docker-compose.yml` to your preference.

**Note**:
To connect the server with the mongodb we use `DBWEBB_DSN`, you can edit this if you'd like.
```
environment:
    - DBWEBB_DSN=mongodb://mongodb:27017/people
```

**Note**: MongoDB and express-server needs to be running if you only want to start
the test.

## Setup & testing without Docker (Recommended for production)

**You can setup your own very quickly, just do the following**:

```
$ npm install
$ npm start
```

**Note**: You will need to install [MongoDB](https://docs.mongodb.com/manual/installation/) on your own. Then make sure
the database is started before doing `npm start`

**Note**: You can set `env DBWEBB_PORT` to which port you prefer before `npm start`,
if you want to run on another port.

**Testing**:

```
$ npm test
```
