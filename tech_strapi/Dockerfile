FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

#RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

RUN apt update -y

RUN apt install curl gnupg -y

RUN mkdir /root/nvm
ENV NVM_DIR /root/nvm
ENV NODE_VERSION 14

# Install nvm with node and npm
SHELL ["/bin/bash", "--login", "-i", "-c"]
RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules 
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
RUN ln -sf $NVM_DIR/versions/node/v$NODE_VERSION/bin/npm /usr/bin/npm
ENV PATH $NODE_PATH:$PATH

RUN npm install --global yarn
RUN yarn --version
RUN yarn global add strapi@3.6.8
#SHELL ["/bin/bash", "--login", "-c"]

WORKDIR /src/app

COPY . .

RUN yarn install

EXPOSE 1337
#CMD [ "sleep", "10000" ]
CMD yarn develop
