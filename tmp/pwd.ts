import { readFileSync, writeFileSync } from 'fs';
writeFileSync('/tmp/pwd.txt', process.cwd());
