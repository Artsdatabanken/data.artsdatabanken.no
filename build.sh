wget -O data/types.json $1
npm run build
cd public
rm types.tar.gz
find . -name "index.html" | tar -czf types.tar.gz -T -
scp types.tar.gz grunnkart@hydra:~/
ssh grunnkart@hydra tar -C tilesdata -zxvf types.tar.gz