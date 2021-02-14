# Microservices with Docker

# Objetive!

- Implement an architecture based in microservices with Docker
- Use at least two microservices and run them.

## Requisites

- Download Docker: https://www.docker.com/
- NodeJs installed: https://nodejs.dev/

### Create Docker Build

```sh
$ git clone https://github.com/tote93/docker-msv-example
$ cd docker-msv-example
$ docker-compose build
```

### Run Docker

Running the next command, will execute docker and the msv will start to run at 3000 port.

```sh
$ docker-compose up
```

You can check it using Postman or through web-browser to fetch the resources at urls:

```sh
http://localhost:3000/
http://localhost:3001/
```

### Stop Docker

```sh
$ docker-compose down
```
