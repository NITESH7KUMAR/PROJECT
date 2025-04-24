# Use PHP with Apache
FROM php:7.4-apache

# Install necessary PHP extensions
RUN docker-php-ext-install mysqli

# Copy PHP files into the container
COPY PHP/ /var/www/html/

# Open port 80
EXPOSE 80
