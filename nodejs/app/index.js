import express from 'express';
import welcomeRouter from './welcome.js';

const mqttMiddleware = (clientMQTT) => (req, _res, next) => {
  req.clientMQTT = clientMQTT;

  next();
};

export default (clientMQTT) => {
  const app = express();

  app.use(mqttMiddleware(clientMQTT));

  app.use('/', welcomeRouter);

  app.use((error, _req, res, next) => {
    res.status(500).send({ error, code: 'UNEXPECTED_ERROR' });
    next();
  });

  return app;
};
