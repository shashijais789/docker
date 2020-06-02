#Specify base image
FROM node:alpine


#Command to execute
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .


#Default Command
CMD ["npm", "start"]