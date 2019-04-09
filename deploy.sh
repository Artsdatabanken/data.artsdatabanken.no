#!/bin/bash
#Please add variables as environmental variables in Travis settings for the project when using this script.
#These lines should also be added in the "script block" of travis.yml.
#- export BRANCH=$(if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then echo $TRAVIS_BRANCH; else echo $TRAVIS_PULL_REQUEST_BRANCH; fi)
#- echo "TRAVIS_BRANCH=$TRAVIS_BRANCH, PR=$PR, BRANCH=$BRANCH"
echo $BRANCH
BRANCH=$1
echo "Making archive..."
tar -czf $BRANCH.tar.gz public/ deploy-www.js
echo "Deploying..."
sshpass -p $scp_pass scp -o StrictHostKeyChecking=no $BRANCH.tar.gz $scp_user@$scp_dest
#Posting to slack to trigger deployment
curl -X POST --data-urlencode "payload={\"channel\": \"$slack_chan\", \"username\": \"travis not the band\", \"text\": \"$slack_command\", \"icon_emoji\": \":ghost:\"}" https://hooks.slack.com/services/$SLACK_TOKEN