import Event from "../model/Event";

export default function validateEventProperties(event: Partial<Event>): string[] {
    const errors: string[] = [];

    if (!event.name) {
        errors.push("Name is required.");
    }
    if (!event.description) {
        errors.push("Description is required.");
    }
    if (!event.date) {
        errors.push("Date is required.");
    }
    if (!event.alias) {
        errors.push("Alias is required.");
    }
    if (!event.local) {
        errors.push("Local is required.");
    }
    if (!event.expectedAudience || event.expectedAudience < 1) {
        errors.push("Expected Audience is required.");
    }
    if (!event.image) {
        errors.push("An image is required.");
    }
    if (!event.backgroundImage) {
        errors.push("An background image is required.");
    }

    return errors
}