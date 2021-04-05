import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import imgConsumo from "../../img/cannabox-tt6ij0tffLc-unsplash.jpg";
import imgConsumo500 from "../../img/cannabox-tt6ij0tffLc-unsplash-p-500.jpeg";
import imgConsumo800 from "../../img/cannabox-tt6ij0tffLc-unsplash-p-800.jpeg";
import imgConsumo1080 from "../../img/cannabox-tt6ij0tffLc-unsplash-p-1080.jpeg";
import imgConsumo1600 from "../../img/cannabox-tt6ij0tffLc-unsplash-p-1600.jpeg";
import imgConsumo2000 from "../../img/cannabox-tt6ij0tffLc-unsplash-p-2000.jpeg";
import imgConsumo2600 from "../../img/cannabox-tt6ij0tffLc-unsplash-p-2600.jpeg";
import imgComunidad from "../../img/kianakali-XycDjxmA-nQ-unsplash.jpg";
import imgComunidad500 from "../../img/kianakali-XycDjxmA-nQ-unsplash-p-500.jpeg";
import imgComunidad800 from "../../img/kianakali-XycDjxmA-nQ-unsplash-p-800.jpeg";
import imgComunidad1080 from "../../img/kianakali-XycDjxmA-nQ-unsplash-p-1080.jpeg";
import imgComunidad1600 from "../../img/kianakali-XycDjxmA-nQ-unsplash-p-1600.jpeg";
import imgComunidad2000 from "../../img/kianakali-XycDjxmA-nQ-unsplash-p-2000.jpeg";
import imgComunidad2600 from "../../img/kianakali-XycDjxmA-nQ-unsplash-p-2600.jpeg";
import imgPoli from "../../img/victor-grabarczyk-bS23wWWgpAc-unsplash.jpg";
import imgPoli500 from "../../img/victor-grabarczyk-bS23wWWgpAc-unsplash-p-500.jpeg";
import imgPoli800 from "../../img/victor-grabarczyk-bS23wWWgpAc-unsplash-p-800.jpeg";
import imgPoli1080 from "../../img/victor-grabarczyk-bS23wWWgpAc-unsplash-p-1080.jpeg";
import imgPoli1600 from "../../img/victor-grabarczyk-bS23wWWgpAc-unsplash-p-1600.jpeg";
import imgPoli2000 from "../../img/victor-grabarczyk-bS23wWWgpAc-unsplash-p-2000.jpeg";
import imgPoli2600 from "../../img/victor-grabarczyk-bS23wWWgpAc-unsplash-p-2600.jpeg";
import imgProduccion from "../../img/american-heritage-chocolate-HJUae0j54tI-unsplash-1.jpg";
import imgProduccion500 from "../../img/american-heritage-chocolate-HJUae0j54tI-unsplash-1-p-500.jpeg";
import imgProduccion800 from "../../img/american-heritage-chocolate-HJUae0j54tI-unsplash-1-p-800.jpeg";
import imgProduccion1080 from "../../img/american-heritage-chocolate-HJUae0j54tI-unsplash-1-p-1080.jpeg";
import imgProduccion1600 from "../../img/american-heritage-chocolate-HJUae0j54tI-unsplash-1-p-1600.jpeg";

export const InfoVariety = () => {
	return (
		<section id="cards-section" className="cards-section-2">
			<div className="centered-container-3 w-container">
				<h2 className="heading-3" />
				<div className="cards-grid-container-2">
					<div id="w-node-_4ad01d63-b245-3c4c-81b8-05f2055e4d96-25d1f98c">
						<div className="cards-image-mask">
							<img
								src={imgConsumo}
								width="2081"
								sizes="(max-width: 479px) 55vw, (max-width: 767px) 57vw, (max-width: 991px) 18vw, 174.23611450195312px"
								srcSet={
									imgConsumo500 +
									" 500w, " +
									imgConsumo800 +
									" 800w, " +
									imgConsumo1080 +
									" 1080w, " +
									imgConsumo1600 +
									" 1600w, " +
									imgConsumo2000 +
									" 2000w, " +
									imgConsumo2600 +
									" 2600w, " +
									imgConsumo +
									" 3200w "
								}
								alt=""
								className="cards-image-2"
							/>
						</div>
						<h3 className="heading-7">Consumo</h3>
						<p className="paragraph-3">
							<strong className="bold-text-2">
								La miel es una sustancia sobresaturada de azúcares y tiende a un estado de equilibrio
								pastoso o cristalizado.
							</strong>
						</p>
					</div>
					<div id="w-node-_4ad01d63-b245-3c4c-81b8-05f2055e4d9d-25d1f98c">
						<div className="cards-image-mask">
							<img
								src={imgComunidad}
								width="1512"
								sizes="(max-width: 479px) 55vw, (max-width: 767px) 57vw, (max-width: 991px) 18vw, 174.23611450195312px"
								srcSet={
									imgComunidad500 +
									" 500w, " +
									imgComunidad800 +
									" 800w, " +
									imgComunidad1080 +
									" 1080w, " +
									imgComunidad1600 +
									" 1600w, " +
									imgComunidad2000 +
									" 2000w, " +
									imgComunidad2600 +
									" 2600w, " +
									imgComunidad +
									" 3024w "
								}
								alt=""
								className="cards-image-2"
							/>
						</div>
						<h3 id="w-node-_4ad01d63-b245-3c4c-81b8-05f2055e4da0-25d1f98c" className="heading-6">
							Comunidad
						</h3>
						<p id="w-node-_4ad01d63-b245-3c4c-81b8-05f2055e4da2-25d1f98c" className="paragraph-6">
							<strong className="bold-text-4">Las abejas son muy sociables y viven en colmenas</strong>,{" "}
							<strong className="bold-text-3">donde habita solamente una abeja reina</strong>.
						</p>
					</div>
					<div id="w-node-_4ad01d63-b245-3c4c-81b8-05f2055e4da4-25d1f98c">
						<div className="cards-image-mask">
							<img
								src={imgPoli}
								sizes="(max-width: 479px) 55vw, (max-width: 767px) 57vw, (max-width: 991px) 18vw, 174.23611450195312px"
								srcSet={
									imgPoli500 +
									" 500w, " +
									imgPoli800 +
									" 800w, " +
									imgPoli1080 +
									" 1080w, " +
									imgPoli1600 +
									" 1600w, " +
									imgPoli2000 +
									" 2000w, " +
									imgPoli2600 +
									" 2600w, " +
									imgPoli +
									" 3974w "
								}
								alt=""
								className="cards-image-2"
							/>
						</div>
						<h3 id="w-node-_4ad01d63-b245-3c4c-81b8-05f2055e4da7-25d1f98c" className="heading-4">
							Polinización
						</h3>
						<p id="w-node-_4ad01d63-b245-3c4c-81b8-05f2055e4da9-25d1f98c" className="paragraph-5">
							<strong className="bold-text-5">
								Hay abejas que se dedican a polinizar solamente una especie de flor
							</strong>
							.
						</p>
					</div>
					<div id="w-node-_21857a05-c2a4-99c1-45de-a4ef711be3cb-25d1f98c">
						<div className="cards-image-mask">
							<img
								src="images/american-heritage-chocolate-HJUae0j54tI-unsplash-1.jpg"
								width="960"
								sizes="(max-width: 479px) 55vw, (max-width: 767px) 57vw, (max-width: 991px) 18vw, 174.23611450195312px"
								srcSet={
									imgProduccion500 +
									" 500w, " +
									imgProduccion800 +
									" 800w, " +
									imgProduccion1080 +
									" 1080w, " +
									imgProduccion1600 +
									" 1600w, " +
									imgProduccion +
									" 1920w "
								}
								alt=""
								className="cards-image-2"
							/>
						</div>
						<h3 id="w-node-_21857a05-c2a4-99c1-45de-a4ef711be3ce-25d1f98c" className="heading-5">
							Producción
						</h3>
						<p id="w-node-_21857a05-c2a4-99c1-45de-a4ef711be3d0-25d1f98c" className="paragraph-4">
							Más del 75 % de los cultivos alimentarios del mundo dependen en cierta medida de la
							polinización{" "}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
