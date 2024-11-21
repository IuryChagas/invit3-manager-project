export default class Password {
    static create(lengthNm: number = 8): string {
        const lowerCases = "abcdefghijklmnopqrstuvwxyz";
        const upperCases = lowerCases.toUpperCase();
        const numbers = "0123456789";
        const chars = "!@#$%&*()/";

        const groups = [lowerCases, upperCases, numbers, chars]
        const password = []

        for (let i = 0; i < lengthNm; i++) {

            const group = groups[Math.floor(Math.random() * groups.length)];
            password.push(group[Math.floor(Math.random() * group.length)]);
        }

        return password.join("")
    }
}

// console.log(Password.create())
