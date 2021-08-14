#FROM alpine:3.9
#RUN apk add --no-cache nginx

# Basic nginx dockerfile starting with Ubuntu 20.04
FROM ubuntu:20.04

COPY . /app

RUN apt-get -y update
RUN apt-get -y install nginx
