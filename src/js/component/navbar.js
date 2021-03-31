import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logomiel.png";

export const Navbar = () => {
	return (
		<header id="nav" className="sticky-nav">
			<nav className="container">
				<ul role="list" className="nav-grid list-unstyled">
					<li id="w-node-brand">
						<a className="nav-logo-link">
							<img src={logo} sizes="138" alt="" className="nav-logo" />
						</a>
					</li>
					<li>
						<a className="nav-link">Features</a>
					</li>
					<li>
						<a className="nav-link">Pricing</a>
					</li>
					<li>
						<a className="nav-link">Features</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
