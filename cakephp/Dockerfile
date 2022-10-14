FROM php:8-fpm

RUN apt-get update && apt-get install -y zip libzip-dev libicu-dev libonig-dev libpng-dev --fix-missing &&\
	docker-php-ext-install zip intl pdo pdo_mysql mysqli mbstring gd

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
	apt-get install -y nodejs &&\
	node -v &&\
	npm -v

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN composer self-update --preview

WORKDIR /var/www
