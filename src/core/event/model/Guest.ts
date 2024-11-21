export default interface Guest {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    hasFellows: boolean;
    qtdFellows: number;
}