# Use a lightweight Nginx web server image
FROM nginx:alpine

# Copy all your website files into the web server's public folder
COPY . /usr/share/nginx/html

# Tell Nginx to serve TypeScript and JSX files as readable JavaScript
RUN echo "types { application/javascript tsx ts jsx; }" > /etc/nginx/conf.d/custom-mime.conf

# Expose port 80 (the default web port)
EXPOSE 80