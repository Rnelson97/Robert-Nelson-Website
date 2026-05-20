# Use a lightweight Nginx web server image
FROM nginx:alpine

# Copy all your website files (index.html, etc.) into the web server's public folder
COPY . /usr/share/nginx/html

# Expose port 80 (the default web port)
EXPOSE 80