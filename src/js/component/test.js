import React, { useState, useEffect, useContext } from "react";
import abejaReina from "../../img/3d1b49_7435d53d778a48a6886c37508aa6bf63_mv2-1.gif";

export const Test = () => {
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
									value="Radio"
									className="w-form-formradioinput w-radio-input"
								/>
								<span className="w-form-label">Radio</span>
							</label>
							<label className="radio-button-field w-radio">
								<input
									type="radio"
									data-name="Radio 4"
									id="radio-4"
									name="radio"
									value="Radio"
									className="w-form-formradioinput w-radio-input"
								/>
								<span className="w-form-label">Radio</span>
							</label>
							<label className="radio-button-field w-radio">
								<input
									type="radio"
									data-name="Radio 3"
									id="radio-3"
									name="radio"
									value="Radio"
									className="w-form-formradioinput w-radio-input"
								/>
								<span className="w-form-label">Radio</span>
							</label>
							<label className="radio-button-field w-radio">
								<input
									type="radio"
									data-name="Radio 2"
									id="radio-2"
									name="radio"
									value="Radio"
									className="w-form-formradioinput w-radio-input"
								/>
								<span className="w-form-label">Radio</span>
							</label>
						</form>
						<div className="w-form-done">
							<div>Thank you! Your submission has been received!</div>
						</div>
						<div className="w-form-fail">
							<div>Oops! Something went wrong while submitting the form.</div>
						</div>
					</div>
					<a href="#" className="w-button">
						Button text
					</a>
				</div>
				<div className="hero-image-mask-2">
					<img src={abejaReina} alt="" className="hero-image-2" />
				</div>
			</div>
		</header>
	);
};
