import React from "react";
import { useLocation } from "react-router-dom";

function DeckPage() {
	const location = useLocation();
	const deckData = location.state?.deckData;

	return (
		<>
			<h3> {deckData.deckTitle}</h3>
			{deckData.cards.map((card) => {
				return (
					<>
						<h4>{card.front}</h4>
						<p>{card.back.description}</p>
						<p>Returns: {card.back.returns}</p>
					</>
				);
			})}
		</>
	);
}

export default DeckPage;
