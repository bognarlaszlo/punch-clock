# Logger
An incoming webhook bot for Google Chat

![Bender](https://i.imgflip.com/526d95.jpg)

### I. Prepare webhook
User this [guide](https://developers.google.com/hangouts/chat/how-tos/webhooks) to create a webhook

### II. Install
```bash
npm install     # install dependencies
npx mix watch   # development with browsersync
npx mix         # build for production
```

### III. Configure
Change fields in `resoruces/scripts/config.js` if needed
- `endpoint`: webhook url generated in the first step
- `user`: user id - [how to obtain](https://stackoverflow.com/questions/49439731/how-can-a-webhook-identify-user-ids)
- `thread`: thread id - obtainment is similar to that of user id
  > The thread id is needed if the room is "threaded", and you don't want to create a new thread every time your bot is sending a message
