import deset from "../../assets/10.svg"
import bomb from "../../assets/bomb.svg"
import cheers from "../../assets/cheers.svg"
import laugh from "../../assets/laugh.svg"
import love from "../../assets/love.svg"
import stopwatch from "../../assets/stopwatch.svg"



function KarticaTip({tip, setIzabrana, izabrana})
 {
    const tipovi={
        "GIRLS NIGHT" :cheers ,
        "3 za 5" : stopwatch,
        "10 je ali" : deset,
        "You Laugh, You’re Out" : laugh,
        "Risk it or drink it" : bomb,
        "Istina - Izazov" : love
    }
    
    return <>
        <div className="kartica-tip" id={izabrana == tip ? "izabrana": ""} style={{background: izabrana == tip ? "#ce4501" : "#FF5400"}} onClick={() => setIzabrana(tip)}>
            <img src={tipovi[tip]}></img>
            <h2>{tip}</h2>
        </div>
    </>
 }
 export default KarticaTip