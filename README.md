## Back-end API

## Setup

In an effort to reduce or eliminate setup time and pre-requisites for on-boarding new developers, a tool called [_Docker_](https://www.docker.com) is being used. To begin contributing to the development of this application, you may want to consider installing 🐳 Docker. For more information and instructions, first read the [Docker](/Klowd/onlineeventpro-demo-api/wiki/Docker) wiki page.

### Docker network

Create a local Docker network, if you don't already have one, to allow all Docker services to communicate with one another. This command **only needs to be run one time** to create the network on your machine.

```shell
docker network create local-network
```

### Clone

Clone the repository from GitHub.

```shell
git clone https://github.com/AustinMaddox/tmdb-api.git
```

Note: You don't _have_ to use the command line to clone the repo. You could use any Git client that you'd like. [GitKraken](https://www.gitkraken.com) is my favorite.

Navigate to the root of the project directory.

### Create .env file

Copy the **.env.example** file to a file named **.env**. Both files reside in the root directory of the project.

```shell
cp .env.example .env
```

### Set the API key in .env

```shell
API_KEY="InsertYourMovieDbApiKeyHere"
```

### Install JS dependencies

```shell
docker-compose run --rm npm install
```

Rather than running `npm install` in a terminal, which uses a developers local operating system and the node executable installed on their computer, we run `npm` in a Docker container which is pre-defined and configured for you in the docker-compose.yml file.

### Run the application

For information on what this command actually does, see the docker-compose.yml file.

```shell
docker-compose run --rm --service-ports start
```

### Make a request to the running application

Use an HTTP Client (like Postman) to make a request to `http://localhost:8000/api/popular` to view the running API application.

### Unit tests

Run Jest unit tests with this command:

```shell
docker-compose run --rm test
```

Note: the API must be running to perform unit testing.
