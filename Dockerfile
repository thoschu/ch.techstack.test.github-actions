# Basic nodejs dockerfile
FROM node:14

ENV PORT="8888"
ENV NAME="Tom S."

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY index.js .
COPY downloaded_artifact_deploy_dist .

EXPOSE 8888

#CMD [ "node", "server.js" ]
CMD [ "npm", "start" ]
