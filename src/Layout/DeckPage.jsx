import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../Components/Card/Card.jsx";

function DeckPage() {
	const location = useLocation();
	const deckData = location.state?.deckData;

	return (
		<>
			<h3> {deckData.deckTitle}</h3>
			{deckData.cards.map((card) => {
				return (
					<Card
						title={card.front}
						description={card.back.description}
						extra_info={card.back.extra_info}
					/>
				);
			})}
		</>
	);
}

export default DeckPage;
