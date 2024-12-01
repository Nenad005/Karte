import slika from "../assets/logo.svg"
function MaliLogo() {
	return <>
		<div className="mali-logo">
			<div className="pocetniTekst" id="mali-tekst">
				<p id="silence">SILENCE</p>
				<p id="breaker">BREAKER</p>
			</div>
			<img src={slika} id="mala-slika"/>
		</div>
	</>
}

export default MaliLogo