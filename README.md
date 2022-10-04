## Setup.

### 1. Install Docker and docker compose.

If you are using macOS you only need to install it from their official website. Docker Desktop also includes docker-compose, docker-engine and other tools related to Docker. Here's the link: [Docker Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-mac/).

### 2. Start docker service.

If you are using macOS, only press command + space bar, then type "Docker" and press ENTER. Another option is openning it from the dashboard or running the command `open -a Docker`.

### 3. Clone this repository.

#### EXAMPLE:

`$ cd ~/code/`
`$ git clone git@github.com:juelvaldivia/mqtt-techtalk.git`
`$ cd mqtt-techtalk`

### 4. Run docker compose to run `MQTT BROKER MOSQUITTO`.

```
$ docker-compose up -d
```
