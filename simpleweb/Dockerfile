#Specify base image
FROM node:alpine

#Specifying a working directory
WORKDIR /usr/app

#Define dependencies
#Copy the files to the container
COPY ./ ./
RUN npm install

#Default Command

CMD ["npm", "start"]