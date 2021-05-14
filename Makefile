IMAGE_NAME := dir-scanner

docker-build:
	@echo "=> Building container"
	docker build -t $(IMAGE_NAME):latest -f ./Dockerfile ./

docker-run:
	@echo "=> Running container"
	docker run -p 127.0.0.1:80:8080/tcp --env NODE_ENV=production --name $(IMAGE_NAME)_server --detach $(IMAGE_NAME)

docker-stop:
	@echo "=> Stopping container"
	docker container stop $(IMAGE_NAME)_server

docker-clean:
	@echo "=> Cleaning container and image"
	docker container rm $(IMAGE_NAME)_server
	docker image rm $(IMAGE_NAME)
