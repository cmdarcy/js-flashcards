import React from "react";
import data from "../cardsData";
import { NavLink } from "react-router-dom";
function DecksPage() {
	return (
		<>
			<h2>Decks</h2>
			<ul>
				{data.map((deck) => {
					return (
						<NavLink to={`/decks/${deck.deckTitle}`}>{deck.deckTitle}</NavLink>
					);
				})}
			</ul>
		</>
	);
}

export default DecksPage;
