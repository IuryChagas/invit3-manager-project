import { events } from "@/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function EventsPage(){

    return (
        <div className="grid grid-cols-3 gap-5">
            {events.map( evt => (
                <div key={evt.id} className="bg-zinc-800 rounded-lg flex flex-col w-full overflow-hidden">
                    <div className="relative w-full h-44">
                        <Image src={evt.image} fill alt={evt.name} title={evt.name} className="object-cover"/>
                    </div>
                    <div className="flex-1 flex flex-col items-center text-center p-7 gap-3">
                        <span className="text-lg font-black">{evt.name}</span>
                        <p className="flex-1 text-sm text-zinc-400">{evt.description}</p>
                        <QRCode value={JSON.stringify({id: evt.id, password: evt.password})} className="w-44 h-44"/>
                    <div className="flex gap-5">
                        <Link href={`/event/admin/${evt.id}/${evt.password}`}
                         className="flex-1 button blue">
                            admin
                        </Link>
                        <Link href={`/invitation/${evt.alias}`}
                         className="flex-1 button green">
                            Invitation
                        </Link>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}