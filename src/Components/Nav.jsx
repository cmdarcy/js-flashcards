import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<ul>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/decks">Decks</NavLink>
				<NavLink to="quiz">Quiz</NavLink>
			</ul>
		</nav>
	);
}

export default Nav;
