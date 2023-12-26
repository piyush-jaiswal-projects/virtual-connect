FROM node:18
ADD package*.json /tmp/
RUN cd /tmp && npm install --unsafe-perm
RUN mkdir /usr/src/app && cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app
ADD . /usr/src/app/
RUN rm -rf logs && mkdir logs
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
