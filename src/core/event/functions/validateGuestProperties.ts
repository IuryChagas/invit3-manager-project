import Guest from "../model/Guest";

export default function validateGuestProperties(guest: Partial<Guest>): string[] {
    const errors: string[] = []

    if (!guest.name) {
        errors.push("Name is required.")
    }

    if (!guest.email) {
        errors.push("E-mail is required.")
    }

    return errors;
}