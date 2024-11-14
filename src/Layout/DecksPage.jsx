import React from "react";
import data from "../cardsData";
import { Link } from "react-router-dom";
function DecksPage() {
	return (
		<>
			<h2 className="text-2xl text-white">Decks</h2>
			<ul>
				{data.map((deck) => {
					return (
						<li>
							<Link
								className="text-celadon hover:text-blush"
								to={`/decks/${deck.deckTitle}`}
								state={{ deckData: deck }}
							>
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
