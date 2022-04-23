import mockdatabase from "./mock-database.json";
import Person from "../src/person.js";

const DEFAULT_LANG = 'pt-BR';

test('should create a person from object', () => {
    const result = new Person(mockdatabase[0]);
    expect(result.id).toBe(mockdatabase[0]['id']);
    expect(result.vehicles).toBe(mockdatabase[0]['vehicles']);
    expect(result.kmTraveled).toBe(mockdatabase[0]['kmTraveled']);
    expect(result.from).toBe(mockdatabase[0]['from']);
    expect(result.to).toBe(mockdatabase[0]['to']);
});

test('should return object with formatted data to a given language', () => {
    const result = new Person(mockdatabase[0]).formatted(DEFAULT_LANG);
    expect(result.id).toBe(1);
    expect(result.vehicles).toBe("Motorcycle, Car e Plane");
    expect(result.kmTraveled).toBe('10.000 km');
    expect(result.from).toBe('01 de janeiro de 2009');
    expect(result.to).toBe('26 de novembro de 2020');
});

test('should return a person instance from a string', () => {
    const inputString = '2 Bike,Boat 50000 2020-01-01 2021-01-01';
    const result = Person.createFromString(inputString);
    expect(result.id).toBe('2');
    expect(result.vehicles).toStrictEqual(['Bike', 'Boat']);
    expect(result.kmTraveled).toBe('50000');
    expect(result.from).toBe('2020-01-01');
    expect(result.to).toBe('2021-01-01');
});
