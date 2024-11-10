import React, { useState } from "react";

function Card({ title, description, extra_info }) {
	const [isFrontSide, setIsFrontSide] = useState(true);
	return (
		<div onClick={() => setIsFrontSide(!isFrontSide)}>
			{isFrontSide ? (
				<h2>{title}</h2>
			) : (
				<>
					<p>{description}</p>
					<p>{extra_info}</p>
				</>
			)}
		</div>
	);
}

export default Card;
