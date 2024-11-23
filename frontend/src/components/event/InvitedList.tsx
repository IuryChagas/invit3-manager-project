import { Guest } from "@/core";
import InvitedItem from "./InvitedItem";

export interface InvitedListProps {
    guest: Guest[];
}

export default function InvitedList(props: Readonly<InvitedListProps>) {
    return (
            <div>
                <ul className="flex flex-col gap-2">
                    {props.guest.map( guest => (
                        <InvitedItem key={guest.id} guest={guest}/>
                    ))}
                </ul>
            </div>
    )
}