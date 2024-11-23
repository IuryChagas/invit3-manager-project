"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Eventx, events, Guest } from "@/core";
import EventDashboard from "@/components/event/EventDashboard";
import EventPasswordForm from "@/components/event/EventPasswordForm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EventAdminPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = useParams();
    const id = params.all[0];

    const [evet, setEvent] = useState<Eventx | null>(null);
    const [password, setPassword] = useState<string | null>(params.all[1] ?? null);

    const presents = evet?.guests.filter( c => c.confirmed) ?? [];
    const absents = evet?.guests.filter( c => !c.confirmed) ?? [];

    const totalOfPresents = presents?.reduce( (total: number, guest: Guest) => {
        return total + guest.qtdFellows + 1;
    }, 0) ?? 0;

    function chargeEvent() {
        const event = events.find(ev => ev.id  === id && ev.password === password);
        setEvent(event ?? null)
    }

    useEffect( () => {
        chargeEvent();
    }, [id, password]);
    
    //console.log('\n\nNAME:: ', evet?.name)
    
    return (
        <div className="flex flex-col items-center">
            {evet ? <EventDashboard
                        eventx={evet}
                        presents={presents}
                        absents={absents}
                        totalOfPresents={totalOfPresents}
                    />
                  : <EventPasswordForm />}
        </div>
    )

    // return evet ? (
    //     <div className="flex flex-col">
    //         <span>{evet.name}</span>
    //     </div>
    // ) : null;
}