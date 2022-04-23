import TerminalController from "../src/terminalController.js";
import mockdatabase from "./mock-database.json";
import Person from "../src/person.js";

const DEFAULT_LANG = 'pt-BR';

test('should convert database to person array', () => {
    const terminalController = new TerminalController();
    const result = terminalController.convertDatabaseJsonToPersonArray(mockdatabase, DEFAULT_LANG);
    const expectedFirstPerson = new Person(mockdatabase[0]).formatted(DEFAULT_LANG);
    const expectedSecondPerson = new Person(mockdatabase[1]).formatted(DEFAULT_LANG);
    expect(result[0]).toStrictEqual(expectedFirstPerson);
    expect(result[1]).toStrictEqual(expectedSecondPerson);
});



