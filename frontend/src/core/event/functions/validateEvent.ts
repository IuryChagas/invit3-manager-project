import { Password } from "@/core/shared";
import Eventx from "../model/Event";
import validateEventProperties from "./validateEventProperties";
import Id from '@/core/shared/id';

export default function validateEvent(partialEvent: Partial<Eventx>): Eventx {
    const errors = validateEventProperties(partialEvent);

    if (errors.length) {
        throw new Error(errors.join("\n"));
    }

    const evet: Eventx = {
        ...partialEvent,
        id: partialEvent.id ?? Id.newhash(),
        password: partialEvent.password ?? Password.create(20),
        expectedAudience: +(partialEvent.expectedAudience ?? 1)
    } as Eventx;

    return evet;
} 