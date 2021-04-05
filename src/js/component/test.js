import React, { useState, useEffect, useContext } from "react";
import abejaReina from "../../img/3d1b49_7435d53d778a48a6886c37508aa6bf63_mv2-1.gif";

export const Test = () => {
	const [resolve, setResolve] = useState("");
	const resultado = e => {
		console.log(e);
		if (e == "true") {
			setResolve("Vaya lo has logrado!!");
		} else {
			setResolve("Lo siento pero no es correcto!!");
		}
	};
	return (
		<header id="hero" className="hero-2">
			<div className="flex-container-2 w-container">
				<div className="div-block-6">
					<h1 className="heading-9">Me gustaria ponerte a prueba:</h1>
					<p className="paragraph-9">Sabes cual es la importancia de las abejas:</p>
					<div className="w-form">
						<form id="email-form" name="email-form" data-name="Email Form">
							<label className="radio-button-field w-radio">
								<input
									type="radio"
									data-name="Radio"
									id="radio"
									name="radio"
									value="true"
									className="w-form-formradioinput w-radio-input"
									onClick={e => resultado(e.target.value)}
								/>
								<span className="w-form-label">La alimentacion de los humanos depende de ellas.</span>
							</label>
							<label className="radio-button-field w-radio">
								<input
									type="radio"
									data-name="Radio 4"
									id="radio-4"
									name="radio"
									value="false"
									className="w-form-formradioinput w-radio-input"
									onClick={e => resultado(e.target.value)}
								/>
								<span className="w-form-label">Vuelan muy rapido.</span>
							</label>
							<label className="radio-button-field w-radio">
								<input
									type="radio"
									data-name="Radio 3"
									id="radio-3"
									name="radio"
									value="false"
									className="w-form-formradioinput w-radio-input"
									onClick={e => resultado(e.target.value)}
								/>
								<span className="w-form-label">Son animales muy amigables.</span>
							</label>
							<label className="radio-button-field w-radio">
								<input
									type="radio"
									data-name="Radio 2"
									id="radio-2"
									name="radio"
									value="false"
									className="w-form-formradioinput w-radio-input"
									onClick={e => resultado(e.target.value)}
								/>
								<span className="w-form-label">
									La miel es muy nutritiva e importante para los seres vivos.
								</span>
							</label>
						</form>
					</div>
				</div>
				<div className="hero-image-mask-2">
					<img src={abejaReina} alt="" className="hero-image-2" />
				</div>
			</div>
			<div className="flex-container resolve">
				<h3>{resolve}</h3>
			</div>
		</header>
	);
};
