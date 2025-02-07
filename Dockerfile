# Base image
FROM nginx:1.25-alpine

# Copy the build folder into the Nginx HTML directory
COPY ./build /usr/share/nginx/html

# Copy custom Nginx configuration (optional, if needed for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
