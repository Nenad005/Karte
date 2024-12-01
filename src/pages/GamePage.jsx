import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MaliLogo from "../components/MaliLogo";

import Kartice from "../components/GamePage/Kartice";

function GamePage() {
    const navigate = useNavigate();
    const params = useParams(); 
    
    useEffect(() => {
        if ("name" in params){}else navigate("/")
    }, [])

    return <>
        <div className="game-wrapper">
            <MaliLogo></MaliLogo>
            <Kartice tip={params["name"]}></Kartice>
        </div>
    </>
}
export default GamePage;