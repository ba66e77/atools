#!/usr/local/bin/bash

logFile=$1

grep 'INSERT\|UPDATE\|SELECT\|DELETE' $logFile | sed 's/\(.*\)VALUES.*/\1/' | sed 's/\(.*\)SET.*/\1/' | sed 's/\(.*\)JOIN.*/\1/' | sed 's/\(.*\)WHERE.*/\1/' | sort | uniq -c | sort -rn
