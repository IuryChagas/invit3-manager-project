export default class Alias {
    static format(value: string): string {
        return value.replace(/ /g, "-").toLowerCase();
    }
}

// const test = "Invit3 DIGITAL 2024"

// console.log('\n', Alias.format(test),'\n')