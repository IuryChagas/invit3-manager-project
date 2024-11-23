import { Eventx, Guest } from "@/core/event"
import EventInformations from './EventInformations';
import AccessViaQRC from './AccessViaQRC';
import Statistic from "../shared/statistic";
import InvitedList from "./InvitedList";

export interface EventDashboardProps {
    eventx: Eventx;
    presents: Guest[];
    absents: Guest[];
    totalOfPresents: number;
}

export default function EventDashboard(props: Readonly<EventDashboardProps>) {
    return (
        <div className="flex flex-col gap-2 self-stretch">
            <div className="flex gap-2">
                <EventInformations eventInfo={props.eventx} className="flex-1"/>
                <AccessViaQRC evt={props.eventx} />
            </div>
            <div className="grid grid-cols-3 gap-6 mt-4">
                <Statistic text="Total expectation Audience: " value={props.eventx.expectedAudience} image="/icons/guests.svg" />
                <Statistic text="Registered: " value={props.presents.length} image="/icons/confirmeds.svg" />
                <Statistic text="Guests Confirmed: " value={props.totalOfPresents} image="/icons/fellows.svg" />
            </div>

            <button className="button blue self-end mt-12">
                <span>Update Guest List</span>
            </button>
            
            <span className="flex py-2 text-xl font-bold text-white/80">
                Guests who confirmed their ATTENDANCE:
            </span>
            <InvitedList guest={props.presents}/>
            <span className="flex py-2 text-xl font-bold text-white/80">
                Guests who confirmed their ABSENCE:
            </span>
            <InvitedList guest={props.absents}/>
        </div>
    )
}