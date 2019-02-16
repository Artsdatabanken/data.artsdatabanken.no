wget -O data/types.json $1
npm run build
cd public
rm -rf Natur_i_Norge
mkdir Natur_i_Norge
mkdir Natur_i_Norge/Landskap
mkdir Natur_i_Norge/Natursystem
mv LA/* Natur_i_Norge/Landskap/
mv NA/* Natur_i_Norge/Natursystem/
rm types.tar.gz
find . -name "index.html" | tar -czf types.tar.gz -T -
scp types.tar.gz grunnkart@hydra:~/
ssh grunnkart@hydra tar -C tilesdata -zxf types.tar.gz
