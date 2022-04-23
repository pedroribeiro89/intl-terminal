import DraftLog from "draftlog";
import chalkTable from "chalk-table";
import Person from "./person.js";
import chalk from "chalk";
import readline from "readline";

export default class TerminalController {
    constructor() {
        this.print = {};
        this.data = {};
    }

    init(database, language) {
        DraftLog(console).addLineListener(process.stdin)
        this.terminal = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.initTable(database, language);
    }

    closeTerminal() {
        this.terminal.close()
    }

    convertDatabaseJsonToPersonArray(database, language) {
        return database.map(item => new Person(item).formatted(language));
    }

    initTable(database, language) {
        const data = this.convertDatabaseJsonToPersonArray(database, language);
        const table = chalkTable(this.getTableOptions(), data);

        this.print = console.draft(table);
        this.data = data;
    }

    updateTable(item) {
        this.data.push(item);
        this.print(chalkTable(this.getTableOptions(), this.data));
    }

    question(msg='') {
        return new Promise(resolve => this.terminal.question(msg, resolve))
    }

    getTableOptions() {
        return {
            leftPad: 2,
            columns: [
                { field: 'id', name: chalk.cyan('ID') },
                { field: 'vehicles', name: chalk.magenta('Vehicles') },
                { field: 'kmTraveled', name: chalk.cyan('Km Traveled') },
                { field: 'from', name: chalk.cyan('From') },
                { field: 'to', name: chalk.cyan('To') },
            ]
        };
    }

}
