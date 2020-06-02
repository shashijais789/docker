#Specify base image
FROM node:alpine

#Specifying a working directory
WORKDIR /usr/app

#Define dependencies
#Copy the files to the container
#COPY [Path to folder to copy from your machine] [Place to copy stuff to inside the container]
COPY ./package.json ./
RUN npm install
COPY ./ ./
#Default Command

CMD ["npm", "start"]