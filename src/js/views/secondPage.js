import React, { Fragment, useState, useEffect, useContext } from "react";
import { IntroWeb } from "../component/introWeb";
import { InfoVariety } from "../component/infoVariety";
import { Curiosity } from "../component/curiosity";
import { Test } from "../component/test";
export const SecondPage = () => {
	return (
		<Fragment>
			<IntroWeb />
			<div className="border-top border-bottom">
				<Curiosity />
			</div>

			<InfoVariety />
			<Test />
		</Fragment>
	);
};
