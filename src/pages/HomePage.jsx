import { useState } from "react"
import KarticaTip from "../components/HomePage/KarticaTip"
import { Link } from "react-router-dom"
import MaliLogo from "../components/MaliLogo"
import slika from "../assets/logo.svg"


function HomePage(){
    const [zapoceta, setZapoceta] = useState(false)
    const [izabrana, setIzabrana] = useState(false)

    const state = () => zapoceta && izabrana ? "kraj" : zapoceta ? "odabir" : "pocetak"

    return <>
        <div className="pocetak" style={{display: state() == "pocetak" ? "flex" : "none"}}>
            <div className="pocetniTekst">
                <p id="silence">SILENCE</p>
                <p id="breaker">BREAKER</p>
            </div>
            <img src={slika} className="pocetna-slika"></img>

            <div className="pocni" onClick={() => setZapoceta(true)} style={{display: zapoceta ? "none" : "flex"}}>
                <h1>PLAY</h1>
            </div>
        </div>
        <div className="odabir" style={{display: state() == "odabir" || state() == "kraj" ? "flex" : "none"}}>
            <MaliLogo></MaliLogo>
            <h1>Izaberi Igru</h1>
            <div className="izbor-kartica">
                <KarticaTip tip={"Istina - Izazov"} izabrana={izabrana} setIzabrana={setIzabrana}></KarticaTip>
                <KarticaTip tip={"GIRLS NIGHT"} izabrana={izabrana} setIzabrana={setIzabrana}></KarticaTip>
                <KarticaTip tip={"Risk it or drink it"} izabrana={izabrana} setIzabrana={setIzabrana}></KarticaTip>
                <KarticaTip tip={"You Laugh, You’re Out"} izabrana={izabrana} setIzabrana={setIzabrana}></KarticaTip>
                <KarticaTip tip={"10 je ali"} izabrana={izabrana} setIzabrana={setIzabrana}></KarticaTip>
                <KarticaTip tip={"3 za 5"} izabrana={izabrana} setIzabrana={setIzabrana}></KarticaTip>
            </div>
            <Link  className="link" style={{background: state() == "kraj" ? "#FF5400" : "#363636", pointerEvents: state() == "kraj" ? "all" : "none"}} to={`/game/${izabrana}`}>Zapocni igru</Link>
        </div>
    </>
}

export default HomePage