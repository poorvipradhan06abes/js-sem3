import fs from 'fs/promises';

async function readFileContent(filename) {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error(`Error reading file ${filename}:`, error);
    }
}

readFileContent('notes.txt');