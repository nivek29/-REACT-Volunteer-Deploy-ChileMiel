import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logomiel.png";
import logo500 from "../../img/logomiel-p-500.png";

export const Navbar = () => {
	return (
		<header id="nav" className="sticky-nav">
			<nav className="w-container">
				<ul role="list" className="nav-grid w-list-unstyled">
					<li id="w-node-f5d47d04-f829-de5d-2f85-b32dc1412e3e-ce20afa7">
						<a href="/" className="nav-logo-link">
							{" "}
							<img
								src={logo}
								sizes="155.98959350585938px"
								srcSet={logo500 + " 500w" + "," + logo + " 519w"}
								alt=""
								className="nav-logo"
							/>
						</a>
					</li>
					<li>
						<Link to={"/"}>
							<a href="#" className="nav-link">
								Sections
							</a>
						</Link>
					</li>
					<li>
						<Link to={"/onePage"}>
							<a href="#" className="nav-link">
								One Page
							</a>
						</Link>
					</li>
					<li>
						<a href="https://chilemiel.cl/" className="nav-link">
							Chile Miel
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
