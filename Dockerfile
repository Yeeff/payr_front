# Etapa 1: Construcción de la aplicación
FROM node:20 AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json antes de instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiar archivos estáticos generados en la etapa de construcción
COPY --from=builder /app/build /usr/share/nginx/html

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 8080

# Comando de inicio
CMD ["nginx", "-g", "daemon off;"]
