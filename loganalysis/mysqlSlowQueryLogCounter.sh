grep 'INSERT\|UPDATE\|SELECT\|DELETE' testFile.txt | sed 's/\(.*\)VALUES.*/\1/' | sed 's/\(.*\)SET.*/\1/' | sed 's/\(.*\)JOIN.*/\1/'
