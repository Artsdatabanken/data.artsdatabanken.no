#!/bin/bash
DESTPATH=/home/grunnkart/
echo Making archive...
tar -cjf data-portal.tar.gz -C ./public .
echo Deploying...
scp data-portal.tar.gz grunnkart@nin.artsdatabanken.no:~/
ssh grunnkart@hydra tar -xjf data-portal.tar.gz -C ./tilesdata
