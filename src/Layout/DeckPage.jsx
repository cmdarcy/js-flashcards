import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../Components/Card/Card.jsx";

function DeckPage() {
	const location = useLocation();
	const deckData = location.state?.deckData;

	return (
		<>
			<h3 className="text-white"> {deckData.deckTitle}</h3>

			<div className="flex gap-2 flex-wrap justify-center">
				{deckData.cards.map((card) => {
					return (
						<Card
							title={card.front}
							description={card.back.description}
							extra_info={card.back.extra_info}
						/>
					);
				})}
			</div>
		</>
	);
}

export default DeckPage;
