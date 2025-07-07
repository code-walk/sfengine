help:
	@echo "=== Strife Fox Engine ==="
	@echo "help ----- Show this help"
	@echo "dev ------ Launch DEV profile"
.PHONY: help

# Очищает файлы логов всех сервисов
clear-logs:
# service nginx
	echo '' > ./services/nginx/logs/access.log
	echo '' > ./services/nginx/logs/error.log
.PHONY: clear-logs

# Запускает систему в режиме отладки
dev: clear-logs
	docker compose -f ./compose.dev.yml up
.PHONY: dev