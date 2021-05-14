## Dir-scanner

### Prerequisites

1. [docker](https://www.docker.com/products/docker-desktop)
2. [make](https://www.gnu.org/software/make/)

### How to run the container

1. Build the container: `make docker-build`
2. Run the container: `make docker-run`

Stop the container via `make docker-stop` and clean via `make docker-clean`

### How to use API

Import `Dir-scanner.postman_collection.json` into Postman or...

Use `curl --location --request GET 'localhost:80/api/paths?path=./node_modules'`
