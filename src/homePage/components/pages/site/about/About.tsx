import React from "react";
import scss from "./About.module.scss";
import Image from "next/image";
import img from "@/shared/images/about.jpg";

const About = () => {
	const data = [
		{
			icon: "🏆",
			title: "Достижения учеников",
			desc: "Удобное расположение филиалов по городу позволяет легко выбрать детский сад рядом с домом.",
			delay: 0, // Задержка для первого блока
		},
		{
			icon: "🎯",
			title: "Достижения учеников",
			desc: "Удобное расположение филиалов по городу позволяет легко выбрать детский сад рядом с домом.",
			delay: 200, // Задержка для второго блока
		},
		{
			icon: "💡",
			title: "Достижения учеников",
			desc: "Удобное расположение филиалов по городу позволяет легко выбрать детский сад рядом с домом.",
			delay: 400, // Задержка для третьего блока
		},
		{
			icon: "🎓",
			title: "Достижения учеников",
			desc: "Удобное расположение филиалов по городу позволяет легко выбрать детский сад рядом с домом.",
			delay: 600, // Задержка для четвертого блока
		},
	];

	return (
		<div id="about" className={scss.About}>
			<div className="container">
				<div className={scss.about}>
					<div data-aos="fade-up" className={scss.text}>
						<h1>О нашей садике</h1>
						<p>УМНАЯ ПЛАНЕТА – частная общеобразовательный детский сад.</p>
						<button>узнать больше</button>
					</div>

					<div className={scss.blocks}>
						<div className={scss.block}>
							{data.map((el, index) => (
								<div
									key={index}
									data-aos="fade-right"
									data-aos-delay={el.delay} // Используем задержку из объекта
									data-aos-duration="1000" // Общая длительность анимации
									className={scss.box}>
									<h2>{el.icon}</h2>
									<div className={scss.text}>
										<h1>{el.title}</h1>
										<p>{el.desc}</p>
									</div>
								</div>
							))}
						</div>
						<div data-aos="fade-left" className={scss.image}>
							<Image src={img} alt="img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
