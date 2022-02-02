import React from "react";
import Form from "./Form";
import Meme from "./Meme";
import memeData from "../memeData";

export default function Main() {
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
		<div className="main">
			<Form handleClick={getMemeImage} />
			<Meme imageUpdate={meme.randomImg} />
		</div>
	);
}
