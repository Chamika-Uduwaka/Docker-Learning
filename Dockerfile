# base image
FROM node:22-alpine

# set working directory
WORKDIR /app    

#copy files 
COPY . .

#run app
CMD ["node", "app.js"]
