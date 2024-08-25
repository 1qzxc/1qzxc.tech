FROM node:8

#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app
#COPY package.json /usr/src/app/
#RUN npm install
#RUN npm install nodemon --global --save
#COPY . /usr/src/app/

# If you are building your code for production
# RUN npm ci --only=production

# try mounting from host
RUN mkdir -p /usr/src/app2
WORKDIR /usr/src/app2
RUN npm install
RUN npm i ejs express gray-matter markdown-it markdown-it-class --save

EXPOSE 8084
CMD [ "npm", "start" ]

