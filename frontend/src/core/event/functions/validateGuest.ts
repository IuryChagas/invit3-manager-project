import Guest from "../model/Guest"
import validateGuestProperties from "./validateGuestProperties"

export default function validateGuest(guest: Partial<Guest>): Guest {
    const errors = validateGuestProperties(guest);

    if (errors.length > 0) {
        throw new Error(errors.join("\n"));
    }
    const qtdFellows = guest.qtdFellows ?? 0;
    const hasFellows = guest.hasFellows && guest.confirmed && qtdFellows > 0;

    const updatedGuest = {
        ...guest,
        qtdFellows: (qtdFellows || 0),
        hasFellows,
    }

    return updatedGuest as Guest;
}