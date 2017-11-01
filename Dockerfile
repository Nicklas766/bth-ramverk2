FROM node:6

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install
RUN npm test
ENV DBWEBB_PORT=1336

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]