.DEFAULT_GOAL=start

build:
	sudo docker build -t norsk .

start: build
	sudo docker run -ti -p 80:8080 norsk:latest
