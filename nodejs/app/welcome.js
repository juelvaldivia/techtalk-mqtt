import express from 'express';

const welcome = async (req, res) => {
  const clientMQTT = req.clientMQTT;
  const data = req.query.data || '23';
  const topic = req.query.topic || 'example/temperature';

  try {
    clientMQTT.publish(topic, data);

    return res.status(200).send({ action: 'published', topic, data })
  } catch (error) {
    let statusCode = 500;
    let payload = { error, code: 'UNEXPECTED_ERROR' };

    if (!clientMQTT.connected) {
      payload = { error, code: 'MQTT_IS_NOT_CONNECTED' };
    }

    return res.status(statusCode).send(payload)
  }
};

const welcomeRouter = express.Router();

welcomeRouter.get('/', welcome);

export default welcomeRouter;
