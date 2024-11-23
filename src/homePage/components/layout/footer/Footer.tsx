"use client";
import React from "react";
import scss from "./Footer.module.scss";
import { Link as ScrollLink } from "react-scroll";
import logo from "@/shared/images/Снимок экрана от 2024-11-20 08-22-24.png";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
	const links = [
		{
			name: "home",
			link: "home",
		},
		{
			name: "About",
			link: "aboutus",
		},

		{
			name: "Feed",
			link: "feed",
		},
		{
			name: "Contacts",
			link: "contacts",
		},
	];

	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.footer}>
					<Image src={logo} alt="img" />
					<div className={scss.nav}>
						{links.map((item, index) => (
							<button key={index}>
								<ScrollLink
									activeClass="active"
									to={item.link}
									spy={true}
									smooth={true}
									offset={0}
									duration={700}>
									{item.name}
								</ScrollLink>
							</button>
						))}
					</div>
					<div className={scss.btn}>
						<button>
							<AiFillInstagram />
						</button>
						<button>
							<FaTelegramPlane />
						</button>
						<button>
							<IoLogoWhatsapp />
						</button>
					</div>
				</div>
         <div className={scss.line}></div>
        <div className={scss.footer_end}>
          <p>Политика конфиденциальности</p>
          <p>Разработал Alim Mahmudov</p>

        </div>
			</div>
		</footer>
	);
};

export default Footer;
