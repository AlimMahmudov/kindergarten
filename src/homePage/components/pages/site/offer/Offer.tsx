import React from "react";
import scss from "./Offer.module.scss";
import "aos/dist/aos.css";

const Offer = () => {
	const data = [
		{
			image: "🌍",
			title: "Изучение языков",
			desc: "Мы обучаем английскому, русскому, кыргызскому.",
		},
		{
			image: "✅",
			title: "Школа полного дня",
			desc: "8:00 - 17:00 дети заняты, 17:00 дети садятся на трансфер, ожидание родителей до 18:30.",
		},
		{
			image: "📍",
			title: "3 филиалов по Бишкеку",
			desc: "Удобное расположение филиалов по городу позволяет легко выбрать детский сад рядом с домом.",
		},
		{
			image: "👶🏻",
			title: "До 16 учеников",
			desc: "Учителя могут уделить внимание каждому ребенку благодаря малочисленным классам.",
		},
		{
			image: "🎨",
			title: "Кружки",
			desc: "Мы предлагаем спортивные секции, творческие студии, интеллектуальные игры и музыкальные занятия.",
		},
		{
			image: "☕",
			title: "3-разовое питание",
			desc: "3-разовое питание",
		},
	];

	return (
		<div id="offer" className={scss.Offer}>
			<div className="container">
				<div className={scss.offer}>
					<div className={scss.offer_text}>
						<h1 data-aos="fade-left">Что мы предлагаем</h1>
					</div>

					<div className={scss.blok}>
						<div data-aos="fade-up" className={scss.block}>
							{data.map((el, index) => (
								<div key={index} className={scss.box}>
									<h2>{el.image}</h2>
									<h1>{el.title}</h1>
									<p>{el.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offer;
