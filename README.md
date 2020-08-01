# Angular 8 video meeting WebRTC

This demonstrates how to build a WebRTC meeting application using PeerJS, Angular and Node with Express.
Users can communicate with each others (via voice and video) by simply joining the same room id by copy-pasting the URL generated
by the app.

The server address is `localhost:3000`.

### Install dependencies

```bash
npm i peerjs -g
cd server
npm i
cd ../front
npm i
```

### Start server

```bash
cd server
npm run nodemon
```

### Start PeerJS

```bash
peerjs --port 3001
```

### Start angular app
```bash
cd front
npm run build-watch
```