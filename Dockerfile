FROM node:12.2.0-alpine AS buildvue
WORKDIR /app
COPY . /app
RUN npm install -g @vue/cli && npm install --silent && npm run build
RUN ls -all /app
# production environment
FROM nginx:1.16.0-alpine
ENV Version="2.0.0" 
RUN apk add --no-cache ca-certificates 

COPY --from=buildvue /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g daemon off;"]