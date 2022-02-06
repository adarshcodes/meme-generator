import React from "react";
import Form from "./Form";
import Meme from "./Meme";

export default function Main() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImg: "https://i.imgflip.com/25w3.jpg",
	});

	const [allMeme, setAllMeme] = React.useState([]);

	React.useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMeme(data.data.memes));
	});

	function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMeme.length);
		const url = allMeme[randomNumber].url;

		setMeme((prevMeme) => ({
			...prevMeme,
			randomImg: url,
		}));
	}

	function setMemeText(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				[name]: value,
			};
		});
	}

	return (
		<div className="main">
			<Form handleClick={getMemeImage} setMemeText={setMemeText} />
			<Meme
				imageUpdate={meme.randomImg}
				topText={meme.topText}
				bottomText={meme.bottomText}
			/>
		</div>
	);
}
