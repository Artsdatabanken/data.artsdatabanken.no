#!/bin/bash
if [ "$1" != "master" ]
then
echo "Making archive..."
tar -czf $1.tar.gz public/*.html deploy-www.js
echo "Deploying..."
sshpass -p $scp_pass scp -o StrictHostKeyChecking=no $1.tar.gz $scp_user@158.38.128.51:/tmp/dataportal
curl -X POST --data-urlencode "payload={\"channel\": \"$2\", \"username\": \"travis not the band\", \"text\": \"$3\", \"icon_emoji\": \":ghost:\"}" https://hooks.slack.com/services/$SLACK_TOKEN
else 
tar -czf data-portal.tar.gz public/*.html deploy-www.js
sshpass -p $scp_pass scp -o StrictHostKeyChecking=no data-portal.tar.gz $scp_user@158.38.128.51:/tmp/dataportal
curl -X POST --data-urlencode "payload={\"channel\": \"$2\", \"username\": \"travis not the band\", \"text\": \"$3\", \"icon_emoji\": \":ghost:\"}" https://hooks.slack.com/services/$SLACK_TOKEN
fi