.DEFAULT_GOAL=start

start:
	sudo docker run -v $(PWD):/usr/share/nginx/html/norsk -p 80:80 nginx:alpine
