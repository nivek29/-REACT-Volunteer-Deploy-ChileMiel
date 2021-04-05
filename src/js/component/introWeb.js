import React, { Component } from "react";
import abejaSide from "../../img/malcolm-lightbody-NfDKLoNbXDk-unsplash.jpg";
import abejaSide500 from "../../img/malcolm-lightbody-NfDKLoNbXDk-unsplash-p-500.jpeg";
import abejaSide800 from "../../img/malcolm-lightbody-NfDKLoNbXDk-unsplash-p-800.jpeg";
import abejaSide1080 from "../../img/malcolm-lightbody-NfDKLoNbXDk-unsplash-p-1080.jpeg";
import abejaSide1600 from "../../img/malcolm-lightbody-NfDKLoNbXDk-unsplash-p-1600.jpeg";
import abejaSide2000 from "../../img/malcolm-lightbody-NfDKLoNbXDk-unsplash-p-2000.jpeg";
import abejaSide2600 from "../../img/malcolm-lightbody-NfDKLoNbXDk-unsplash-p-2600.jpeg";
import abejaSide3200 from "../../img/malcolm-lightbody-NfDKLoNbXDk-unsplash-p-3200.jpeg";

export const IntroWeb = () => {
	return (
		<header id="hero" className="hero">
			<div className="flex-container w-container">
				<div className="div-block">
					<h1 className="heading">¿Sabes la importancia de las abejas para el mundo?</h1>
					<p className="paragraph">
						¡Setenta mil especies <strong className="bold-text">de</strong> plantas son polinizadas por{" "}
						<strong>abejas!</strong>
					</p>
				</div>
				<div className="hero-image-mask">
					<img
						src={abejaSide}
						width="2000"
						sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 43vw, 426.545166015625px"
						srcSet={
							abejaSide500 +
							" 500w, " +
							abejaSide800 +
							" 800w, " +
							abejaSide1080 +
							" 1080w, " +
							abejaSide1600 +
							" 1600w, " +
							abejaSide2000 +
							" 2000w, " +
							abejaSide2600 +
							" 2600w, " +
							abejaSide3200 +
							" 3200w, " +
							abejaSide +
							" 4000w "
						}
						alt=""
						className="hero-image"
					/>
				</div>
			</div>
		</header>
	);
};
