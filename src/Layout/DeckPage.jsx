import React from "react";
import { useParams } from "react-router-dom";

function DeckPage() {
	const urlParams = useParams();
	return (
		<>
			<h3>{urlParams.deckTitle}</h3>
		</>
	);
}

export default DeckPage;
