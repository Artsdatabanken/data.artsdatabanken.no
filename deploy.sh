#!/bin/bash
sshpass -p '$scp_pass' scp -r public/ $scp_user@nin.artsdatabanken.no:~/
