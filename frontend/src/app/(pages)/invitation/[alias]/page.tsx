import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function InvitationPage(props: any) {
    console.log("InvitationPage: ", props);
    return (
        <div>
            <span>{props.params.alias}</span>
        </div>
    );
}