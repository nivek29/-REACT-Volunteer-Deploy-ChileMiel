import React, { useState, useEffect, useContext } from "react";
import abejaLoca from "../../img/39549d8412a5ca0cfa6da1c8dd4b1da0.gif";

export const Curiosity = () => {
	return (
		<section id="feature-section" className="feature-section">
			<div className="flex-container-2 w-container">
				<div className="feature-image-mask">
					<img src={abejaLoca} alt="" className="feature-image" />
				</div>
				<div className="div-block-2">
					<h2 className="heading-2">¡Volar a la velocidad de la luz!</h2>
					<p className="paragraph-2">
						Las abejas pueden volar a velocidades de hasta 15 millas por hora. Eso puede parecer rápido,
						pero no lo es, en realidad es bastante lento. Las abejas están diseñadas para viajes cortos de
						flor en flor, no para viajes de larga distancia. Sus alas minúsculas deben agitar unas 12.000
						veces por minuto para mantener sus cuerpos cargados de polen en el aire durante el vuelo a casa.
					</p>
				</div>
			</div>
		</section>
	);
};
