import database from "../database.json";
import TerminalController from "./terminalController.js";
import Person from "./person.js";
import {save} from "./repository.js";

const DEFAULT_LANG = 'pt-BR';
const STOP_TERM = ':q';

const terminalController = new TerminalController();
terminalController.init(database, DEFAULT_LANG);

async function mainLoop() {
    try {
        const answer = await terminalController.question();

        if (answer === STOP_TERM) {
            terminalController.closeTerminal();
            console.log('process finished');
        } else {
            const person = Person.createFromString(answer);
            console.log(person.formatted(DEFAULT_LANG));
            terminalController.updateTable(person.formatted(DEFAULT_LANG));
            await save(person);
            mainLoop();
        }

    } catch (error) {
        console.error('error', error);
        mainLoop();
    }
}

await mainLoop();
// 2 Bike,Boat 50000 2020-01-01 2021-01-01
