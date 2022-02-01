import React from "react";
import memeData from "../memeData";

function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMemeImages, setAllMemeImages] = React.useState(memeData);

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;

		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	return (
		<>
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
				</div>
			</div>
			<div className="meme-container">
				<img
					src={meme.randomImage}
					alt="meme"
					className="meme-container__image"
				/>
			</div>
		</>
	);
}

export default Meme;
