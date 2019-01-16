FROM python:alpine
RUN mkdir -p /app/norsk
COPY . /app/norsk
WORKDIR /app
CMD ["python", "-m", "http.server", "8080"]
