import fs from 'fs';

const readFile = (path: string) => JSON.parse(fs.readFileSync(path, 'utf8'));

export default readFile;
