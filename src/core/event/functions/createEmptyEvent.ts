import Event from "../model/Event";
import Id from "@/core/shared/id";

export default function createEmptyEvent(): Partial<Event> {
    return {
        id: Id.newhash(),
        name: "",
        description: "",
        date: new Date(),
        local: "",
        expectedAudience: 1,
        // guests: Guest[],
        image: "",
        backgroundImage: ""
    }
}
