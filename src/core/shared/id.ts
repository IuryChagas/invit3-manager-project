export default class Id {
    static newhash(): string {
        return `${this.hash()}-${this.hash()}-${this.hash()}`
    }
    private static hash(): string {
        return Math.random().toString(36).substring(2, 15); 
    }
}


// console.log('\n UUID: ',Id.newhash(), '\n')