import React from "react";

function Meme(props) {
	return (
		<div className="meme-container">
			<img
				src={props.imageUpdate}
				alt="meme"
				className="meme-container__image"
			/>

			<h2 className="meme--text top">One does not simply</h2>
			<h2 className="meme--text bottom">Walk into Mordor</h2>
		</div>
	);
}

export default Meme;
