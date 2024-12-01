import { useState } from "react";
import Timer from "../Timer";

export default function Kartica({tip, pitanje}){
    const [zavrsen, setZavrsen] = useState(false)

    return <>
        <div style={{background: zavrsen ? "#363636" : "#FF5400"}}>
            <h2>{pitanje}</h2>
            {tip == "3 za 5" && <Timer zavrsen={zavrsen} setZavrsen={setZavrsen}></Timer>}
            {tip != "3 za 5" && <>
            </>}
        </div>
    </>
}