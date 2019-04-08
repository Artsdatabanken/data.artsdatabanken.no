#!/bin/bash
echo Making archive...
scp -r public/static grunnkart@hydra:~/tilesdata/
tar -czf data-portal.tar.gz public/* deploy-www.js
ls -la data-portal.tar.gz
echo Deploying...
scp data-portal.tar.gz grunnkart@nin.artsdatabanken.no:~/
ssh grunnkart@hydra tar -zxf data-portal.tar.gz
ssh grunnkart@hydra node deploy-www.js metabase.json
scp public/*.js grunnkart@hydra:~/tilesdata/
scp public/index.html grunnkart@hydra:~/tilesdata/
