import React from "react";

class Meme extends React.Component {
	render() {
		return (
			<div className="meme-container">
				<img
					src="https://cms.qz.com/wp-content/uploads/2018/07/meme-featured.jpg?quality=75&strip=all&w=900&h=900&crop=1"
					alt="meme"
					className="meme-container__image"
				/>
			</div>
		);
	}
}

export default Meme;
