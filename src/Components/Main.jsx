import React from "react";
import Form from "./Form";
import Meme from "./Meme";

export default class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<Form />
				<Meme />
			</div>
		);
	}
}
