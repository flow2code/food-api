#!/bin/bash

docker build -t foodapi .
docker-compose up -d  web mongo
