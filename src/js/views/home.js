import React, { Fragment, useEffect, useContext, useState } from "react";
import { IntroWeb } from "../component/introWeb";
import { InfoVariety } from "../component/infoVariety";
import { Curiosity } from "../component/curiosity";
import { Test } from "../component/test";
import Button from "react-bootstrap/Button";

export const Home = () => {
	//const [id_Provider, setId_Provider] = useState("");

	const [pagina, setPagina] = useState(0);

	const cambiarPagina = num => {
		setPagina(pagina + num);
		console.log(pagina);
	};

	if (pagina == 0) {
		return (
			<Fragment>
				<IntroWeb />
				<div className="container">
					<div className=" btns">
						<Button
							className="btn-atras-hidden"
							variant="secondary"
							onClick={() => {
								cambiarPagina(-1);
							}}>
							Atrás
						</Button>
						<Button
							className="btn-forward"
							variant="secondary"
							onClick={() => {
								cambiarPagina(1);
							}}>
							Continuar
						</Button>
					</div>
				</div>
			</Fragment>
		);
	}
	if (pagina == 1) {
		return (
			<Fragment>
				<Curiosity />
				<div className="container">
					<div className=" btns">
						<Button
							className="btn-atras"
							variant="secondary"
							onClick={() => {
								cambiarPagina(-1);
							}}>
							Atrás
						</Button>
						<Button
							className="btn-forward"
							variant="secondary"
							onClick={() => {
								cambiarPagina(1);
							}}>
							Continuar
						</Button>
					</div>
				</div>
			</Fragment>
		);
	}
	if (pagina == 2) {
		return (
			<Fragment>
				<InfoVariety />
				<div className="container">
					<div className=" btns">
						<Button
							className="btn-atras"
							variant="secondary"
							onClick={() => {
								cambiarPagina(-1);
							}}>
							Atrás
						</Button>
						<Button
							className="btn-forward"
							variant="secondary"
							onClick={() => {
								cambiarPagina(1);
							}}>
							Continuar
						</Button>
					</div>
				</div>
			</Fragment>
		);
	}
	if (pagina == 3) {
		return (
			<Fragment>
				<Test />
				<div className="container">
					<div className=" btns">
						<Button
							className="btn-atras"
							variant="secondary"
							onClick={() => {
								cambiarPagina(-1);
							}}>
							Atrás
						</Button>
						<Button
							className="btn-forward-hidden"
							variant="secondary"
							onClick={() => {
								cambiarPagina(1);
							}}>
							Continuar
						</Button>
					</div>
				</div>
			</Fragment>
		);
	}
};
