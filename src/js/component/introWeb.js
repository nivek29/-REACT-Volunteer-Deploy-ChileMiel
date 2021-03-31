import React, { Component } from "react";
import abejaSide from "../../img/malcolm-lightbody-NfDKLoNbXDk-unsplash.jpg";

export const IntroWeb = () => {
	return (
		<div id="hero" className="hero">
			<div className="flex-container container">
				<div div-block>
					<h1 className="heading">¿Conoces la importancia de las abejas para el mundo?</h1>
					<p className="paragraph">
						¡Setenta mil especies de <strong className="bold-text">plantas</strong> son polinizadas por{" "}
						<strong>abejas</strong>
					</p>
					<div className="form">
						<form id="email-from" name="email-form" data-name="Email form">
							<input
								type="text"
								className="input"
								maxLength="256"
								name="name"
								data-name="Name"
								placeholder="Introduce tu nombre"
								id="name"
							/>
							<button type="button" className="button">
								Aprender más
							</button>
						</form>
					</div>
				</div>
				<div className="hero-image-mask">
					<img
						src={abejaSide}
						width="2000"
						sizes="(max-width: 479px) 92vw, (max-width: 767px)95vw, (max-width: 991px) 318.484375vw"
						alt=""
						className="hero-image"
					/>
				</div>
			</div>
		</div>
	);
};
