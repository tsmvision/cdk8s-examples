# Step 1: Use the official Node.js image as the base image
FROM node:22-alpine3.19

ARG USER=default
ENV HOME=/home/$USER

# install sudo as root
RUN apk add --update sudo

# add new user
RUN adduser -D $USER \
        && echo "$USER ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/$USER \
        && chmod 0440 /etc/sudoers.d/$USER

USER $USER
WORKDIR $HOME

#WORKDIR /usr/src/app
COPY package*.json ./
RUN sudo npm install --production

COPY ./build/ .

EXPOSE 3000

CMD ["node", "index.js"]
