import Event from "./model/Event";
import Guest from "./model/Guest";

import validateEvent from "./functions/validateEvent";
import validateGuest from "./functions/validateGuest";
import createEmptyEvent from "./functions/createEmptyEvent";
import createEmptyGuest from "./functions/createEmptyGuest";

export type {Event, Guest};
export {
    validateEvent,
    validateGuest,
    createEmptyEvent,
    createEmptyGuest,
}