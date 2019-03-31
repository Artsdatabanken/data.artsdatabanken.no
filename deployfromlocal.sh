#!/bin/bash
echo Making archive...
tar -czf data-portal.tar.gz public/*.html deploy-www.js
ls -la data-portal.tar.gz
echo Deploying...
scp data-portal.tar.gz grunnkart@nin.artsdatabanken.no:~/
ssh grunnkart@hydra tar -zxf data-portal.tar.gz
ssh grunnkart@hydra node deploy-www.js metabase.json
scp public/*.js grunnkart@hydra:~/tilesdata/
scp -r public/static grunnkart@hydra:~/tilesdata/
