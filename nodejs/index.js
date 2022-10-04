import dotenv from 'dotenv';

import appPublisher from './app/index.js';
import mqttConnection from './lib/mqtt/connection.js';

dotenv.config();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8888;

const MQTT_URL = process.env.MQTT_URL || 'mqtt://127.0.0.1';
const MQTT_PORT = process.env.MQTT_PORT || 1883;
const MQTT_CLIENT_ID = process.env.MQTT_CLIENT_ID || 'monitoring';
const MQTT_USERNAME = process.env.MQTT_USERNAME || '';
const MQTT_PASSWORD = process.env.MQTT_PASSWORD || '';

const clientMQTT = mqttConnection(MQTT_URL, MQTT_PORT, MQTT_CLIENT_ID, MQTT_USERNAME, MQTT_PASSWORD)
const app = appPublisher(clientMQTT);

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Publisher listening on http://${HOST}:${PORT}`);
});
