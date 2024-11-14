import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../Components/Card/Card.jsx";

function DeckPage() {
	const location = useLocation();
	const deckData = location.state?.deckData;

	return (
		<>
			<h3 className="text-white text-2xl mb-2"> {deckData.deckTitle}</h3>
			{deckData.cards.length === 0 && (
				<p className="text-white">
					This deck is currently empty. Add your own cards to this deck by
					visiting the github repo!
				</p>
			)}
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
