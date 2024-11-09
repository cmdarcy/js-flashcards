import React from "react";

function Card({ title, description, returns }) {
	return (
		<>
			<h2>{title}</h2>
			<p>{description}</p>
			<p>Returns: {returns}</p>
		</>
	);
}

export default Card;
