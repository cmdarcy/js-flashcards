import React from "react";
import data from "../cardsData";
import { Link } from "react-router-dom";
function DecksPage() {
	return (
		<>
			<h2>Decks</h2>
			<ul>
				{data.map((deck) => {
					return (
						<li>
							<Link to={`/decks/${deck.deckTitle}`} state={{ deckData: deck }}>
								{deck.deckTitle}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default DecksPage;
