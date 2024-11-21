import { Password } from "@/core/shared";
import Event from "../model/Event";
import validateEventProperties from "./validateEventProperties";
import Id from '@/core/shared/id';

export default function validateEvent(partialEvent: Partial<Event>): Event {
    const errors = validateEventProperties(partialEvent);

    if (errors.length) {
        throw new Error(errors.join("\n"));
    }

    const event: Event = {
        ...partialEvent,
        id: partialEvent.id ?? Id.newhash(),
        password: partialEvent.password ?? Password.create(20),
        expectedAudience: +(partialEvent.expectedAudience ?? 1)
    } as Event;

    return event;
} 