build:
	docker-compose build --no-cache

up-build:
	docker-compose up --build

up:
	docker-compose up -d

up-fg:
	docker-compose up

stop:
	docker-compose stop

down:
	docker-compose down

ps:
	docker-compose ps

sh:
	docker-compose exec app sh

prisma-generate:
	docker-compose exec app npx prisma db push

prisma-generate:
	docker-compose exec app npx prisma generate

prisma-migrate-int:
	docker-compose exec app npx prisma migrate dev --name init
