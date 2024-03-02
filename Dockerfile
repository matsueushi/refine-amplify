FROM node:lts-bullseye-slim

RUN apt update && \
    apt install -y \
    gpg \
    git \
    wget \
    sudo
RUN git config --global gpg.program "$(which gpg)"
RUN sudo apt update && sudo apt install java-common
RUN wget https://corretto.aws/downloads/latest/amazon-corretto-11-x64-linux-jdk.deb
RUN sudo dpkg --install java-11-amazon-corretto-jdk_11.0.7.10-1_amd64.deb
