import React, { useState } from "react";
import scss from "./Answer.module.scss";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

const Answer = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const data = [
		{
			title: "Сколько учеников в классе?",
			desc: "Детский сад работает по пятидневной системе, занятия проходят в одну смену, что удобно для родителей и учеников.",
		},
		{
			title: "Как организовано питание для учеников?",
			desc: "Детский сад работает по пятидневной системе, занятия проходят в одну смену, что удобно для родителей и учеников.",
		},
		{
			title: "Необходимые документы для поступления в первый класс?",
			desc: "Детский сад работает по пятидневной системе, занятия проходят в одну смену, что удобно для родителей и учеников.",
		},
	];

	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className={scss.Answer}>
			<div className="container">
				<div className={scss.answer}>
					<div className={scss.filials_text}>
						<h1 data-aos="fade-left">Вопросы & Ответы</h1>
					</div>
					{data.map((el, index) => (
						<div key={index} className={scss.accordionItem}>
							<div
								className={scss.accordionTitle}
								onClick={() => toggleAccordion(index)}>
								<h2>{el.title}</h2>
								<span className={scss.icon}>
									{activeIndex === index ? <FiMinus /> : <IoAddOutline />}{" "}
							 
								</span>
							</div>
							{activeIndex === index && (
								<div className={scss.accordionContent}>
									<p>{el.desc}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Answer;
