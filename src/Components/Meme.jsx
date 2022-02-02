import React from "react";

function Meme(props) {
	return (
		<div className="meme-container">
			<img
				src={props.imageUpdate}
				alt="meme"
				className="meme-container__image"
			/>
		</div>
	);
}

export default Meme;
