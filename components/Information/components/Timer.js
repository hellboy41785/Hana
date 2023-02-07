import { useState, useEffect } from "react";
import { differenceInDays, differenceInHours, differenceInMinutes} from 'date-fns';


const Timer = ({ airingSchedule }) => {
    const airingTime = new Date(airingSchedule.nodes[0].airingAt * 1000);
    const now = new Date();
    const days = differenceInDays(airingTime, now);
    const hours = differenceInHours(airingTime, now) % 24;
    const minutes = differenceInMinutes(airingTime, now) % 60;

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-sm">EPISODE <span className="text-red-600">{airingSchedule.nodes[0].episode}</span> WILL BE RELEASED IN</h1>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max  ">
                <div className="flex flex-col p-2 bg-[#9ba6a5]  text-neutral-content rounded-sm">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": days }}></span>
                    </span>
                    Days
                </div>
                <div className="flex flex-col p-2  bg-[#9ba6a5] text-neutral-content rounded-sm">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": hours }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2  bg-[#9ba6a5] text-neutral-content rounded-sm">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": minutes }}></span>
                    </span>
                    min
                </div>
            </div>

        </div>
    )
}

export default Timer