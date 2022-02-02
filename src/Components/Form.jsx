import React from "react";
import memeData from "../memeData";
import Meme from "./Meme";

export default function Form() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImg: "https://i.imgflip.com/25w3.jpg",
	});

	function getMemeImage() {
		const memesArray = memeData.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;

		setMeme((prevMeme) => ({
			...prevMeme,
			randomImg: url,
		}));
	}

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

				<button className="form-container__button" onClick={getMemeImage}>
					Get a new meme image 🖼
				</button>

				<Meme imageUpdate={meme.randomImg} />
			</div>
		</div>
	);
}
