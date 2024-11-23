import Guest from "./Guest";

export default interface Eventx {
    id: string;
    alias: string;
    password: string;
    name: string;
    date: Date;
    local: string;
    description: string;
    image: string;
    backgroundImage: string;
    expectedAudience: number;
    guests: Guest[];
}