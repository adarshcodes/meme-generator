import React from "react";

export default function Form() {
	return (
		<div className="form-container">
			<div action="#" className="form-container--form">
				<div className="form-container--form__inputs">
					<input
						type="text"
						className="form-container--form__input"
						id="top-text"
						name="top-text"
						placeholder="Top Text"
					/>

					<input
						type="text"
						className="form-container--form__input"
						id="bottom-text"
						name="bottom-text"
						placeholder="Bottom Text"
					/>
				</div>

				<button className="form-container__button">
					Get a new meme image 🖼
				</button>
			</div>
		</div>
	);
}
