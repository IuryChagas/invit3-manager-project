import { Eventx } from "@/core";
import QRCode from "react-qr-code";

export interface AccessViaQRCProps {
    evt: Eventx;
}
export default function AccessViaQRC(props: Readonly<AccessViaQRCProps>){
    return (
        <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10 py-3 rounded-lg">
            <span className="text-sm font-light text-zinc-400">
                Access via Mobile
            </span>
            <QRCode value={JSON.stringify({
                id: props.evt.id,
                password: props.evt.password
            })} className="w-32 h-32"/>
        </div>
    )
}