import { writeFile, readFile } from 'fs/promises';

export const save = async (data) => {
    // console.log('foi3', new URL('./../database.json', import.meta.url));
    // const { pathname: databaseFile } = new URL('./../database.json', import.meta.url);
    // console.log(pathname);
    // const currentData = JSON.parse((await readFile(pathname)));
    // currentData.push(data);
    //
    // await writeFile(databaseFile, JSON.stringify(currentData));
    console.log('foi3');
    const { pathname } = new URL('./../database.json', import.meta.url);
    const currentData = JSON.parse((await readFile(pathname)));
    console.log('foi4');
    currentData.push(data);

    await writeFile(pathname, JSON.stringify(currentData));
}
