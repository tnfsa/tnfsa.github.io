[![Node.js CI](https://github.com/tnfsa/tnfsa.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/tnfsa/tnfsa.github.io/actions/workflows/node.js.yml)
# TNFSH-SA Lunch Order System

## Technology Stack
  - React
  - PWA

## Features
* Integrated with Google OAuth API
* Great UI Design to let user choose what to eat
* The WebApp supports Progressive Web App to install like a normal app.

## Build and Run
#### Prerequisite
* Node.js with NPM

#### Local build
```shell
npm install
npm start
```
By default, the app will run on 3000 port.
Notice: localhost / 127.0.0.1 **WILL** produce CORS error, you should assign another domain in /etc/hosts or DNS Server to replace localhost.

#### Production Environment (Deploy)
```shell
npm install
npm deploy
```

#### CI / CD Deploy Script
```shell
npm ci
npm deploy
```

## Backend
This WebApp is integrated with a backend server.  
Unfortunately, there is no plan to release the backend source due to security reason.  
All you can do is modify the front-end source and build your own client.  
The API Docs will be released recently.  