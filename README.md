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
$ docker-compose -up -d
```

**Only testing**:
```
// This will only start the test
$ docker-compose -up test
```


**Note**: If you want to use another port, you can easily edit the ports in
`docker-compose.yml` to your preference.

**Note**: MongoDB and express-server needs to be running.


## Setup & testing without Docker (Not recommended)

**You can setup your own very quickly, just do the following**:

```
$ npm install
$ npm start
```

**Note**: You will need to install [MongoDB](https://docs.mongodb.com/manual/installation/) on your own. Then make sure
the database is started before doing `npm start`

**Testing**:

```
$ npm test
```
