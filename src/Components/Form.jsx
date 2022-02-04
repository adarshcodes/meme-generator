import React from "react";

export default function Form(props) {
	return (
		<div className="form-container">
			<div action="#" className="form-container--form">
				<div className="form-container--form__inputs">
					<input
						type="text"
						className="form-container--form__input"
						id="top-text"
						name="topText"
						onChange={props.setMemeText}
						value={props.topText}
						placeholder="Top Text"
					/>

					<input
						type="text"
						className="form-container--form__input"
						id="bottom-text"
						name="bottomText"
						onChange={props.setMemeText}
						value={props.bottomText}
						placeholder="Bottom Text"
					/>
				</div>

				<button className="form-container__button" onClick={props.handleClick}>
					Get a new meme image 🖼
				</button>
			</div>
		</div>
	);
}
