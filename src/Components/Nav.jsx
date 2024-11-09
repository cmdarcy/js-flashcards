import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/decks">Decks</NavLink>
				</li>
				<li>
					<NavLink to="quiz">Quiz</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
