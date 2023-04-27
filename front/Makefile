FRONT_SERVICE=secure_by_design_front

install:
	@docker compose run --rm $(FRONT_SERVICE) npm install $(deps)

dev:
	@docker compose run --rm --service-ports $(FRONT_SERVICE) npm run dev

build:
	@docker compose run --rm $(FRONT_SERVICE) npm run build
