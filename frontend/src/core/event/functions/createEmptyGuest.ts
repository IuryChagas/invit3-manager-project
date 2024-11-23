import Guest from "../model/Guest";
import Id from "@/core/shared/id";

export default function createEmptyEvent(): Partial<Guest> {
    return {
        id: Id.newhash(),
        name: "",
        email: "",
        confirmed: true,
        hasFellows: false,
        qtdFellows: 0
    }
}