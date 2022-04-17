import { writeFile, readFile } from 'fs/promises';

export const save = async (data) => {
    const { pathname } = new URL('./../database.json', import.meta.url);
    const currentData = JSON.parse((await readFile(pathname)));
    currentData.push(data);

    await writeFile(pathname, JSON.stringify(currentData));
}
