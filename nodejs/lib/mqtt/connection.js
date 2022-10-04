import mqtt from 'mqtt';

export default (url, port, clientId, username, password) => {
  const options = {
    port,
    clientId,
    username,
    password
  };

  const connection = mqtt.connect(url, options);

  connection.on('connect', () => {
    console.log('Connected to MQTT successfully'); // eslint-disable-line no-console
    console.log(`Client ID: ${clientId}`); // eslint-disable-line no-console
    console.log(`Url: ${url}`); // eslint-disable-line no-console
  });

  connection.on('offline', () => {
    console.log('MQTT is not connected!!!', options); // eslint-disable-line no-console
  });

  return connection;
}
