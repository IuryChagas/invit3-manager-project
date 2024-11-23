import { Eventx } from "@/core/event"
import Information from "../shared/information";

export interface EventInformationsProps {
    eventInfo: Eventx;
    className?: string;
}

export default function EventInformations(props: Readonly<EventInformationsProps>){
    const { eventInfo } = props;
    return (
        <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
            <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
                <span className="text-2xl font-black">{eventInfo.alias}: </span>
                <span className="text-xl text-zinc-300">{eventInfo.name}</span>
            </div>
            <div className="flex gap-2">
                <Information label="Date:">
                    <span>
                        {new Date(eventInfo.date).toLocaleDateString()}
                        {" at "}
                        {new Date(eventInfo.date).toLocaleTimeString()}
                    </span>
                </Information>
                <Information label="Local:">{eventInfo.local}</Information>
            </div>
            <Information label="Description:">{eventInfo.description}</Information>
        </div>
    );
}