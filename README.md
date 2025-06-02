# Dockerized Nestjs App

- \$ docker build -t nestjs-img-api . && docker run --name nest-api-test-cont -p 3000:3000 nestjs-img-api
- \$ docker build -t nestjs-img-api . && docker run -p 3000:3000 nestjs-img-api
- To reuse the container name:
  - \$ (docker rm -f nest-api-test-cont 2>/dev/null || true) && docker run --name nest-api-test-cont -p 3000:3000 nestjs-img-api
  - (or) Using Docker Compose:
    - \$ touch docker-compose.yml
    - copy the content of file
    - \$ docker-compose up --build
- highly recommend to use docker compose approach
