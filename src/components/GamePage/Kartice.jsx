import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import pitanja from "../../assets/pitanja.json"
import Timer from "../../components/Timer";
import Kartica from './Kartica';


function Kartice({ tip }) {
	console.log(pitanja)

	const uzrecice = {
		"GIRLS NIGHT": {
			gore: "Let's go GIRLS!",
			dole: <h1>Be honest</h1>,
		},
		"3 za 5": {
			gore: "Hurry Up!",
			// dole: <Timer/>,
			dole: <h1>Nabrajaj!!</h1>,
		},
		"10 je ali": {
			gore: "Zdravouu Ljoudii",
			dole: <h1>Dragi / Draga</h1>,
		},
		"You Laugh, You’re Out": {
			gore: "Smile Whisely :)",
			dole: <h1>Don't be a loser!</h1>,
		},
		"Risk it or drink it": {
			gore: "Thirsty?",
			dole: <h1>Drink Up!</h1>,
		},
		"Istina - Izazov": {
			gore: "Be Honest",
			dole: <h1>Do Dare</h1>,
		},
	}

	return (
		<div className='kartice'>
			<h1>{uzrecice[tip].gore}</h1>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
				onRealIndexChange={(swiper) => {
					swiper.allowTouchMove = false
					swiper.unsetGrabCursor();
				}}
				onTouchEnd={(swiper) => {
					swiper.allowTouchMove = true;
				}}
			>
				{pitanja[tip].map((pitanje) => {
					return <>
						<SwiperSlide>
							<Kartica tip={tip} pitanje={pitanje}></Kartica>
						</SwiperSlide>
					</>
				})}
			</Swiper>
			{uzrecice[tip].dole}	
		</div>
	);
}

export default Kartice