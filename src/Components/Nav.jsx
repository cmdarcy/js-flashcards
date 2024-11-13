import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<ul className="flex gap-2">
				<li>
					<NavLink
						className="text-xl text-celadon hover:bg-charcoal border-2 border-celadon p-1"
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-xl text-celadon hover:bg-charcoal border-2 border-celadon p-1"
						to="/decks"
					>
						Decks
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-xl text-celadon hover:bg-charcoal border-2 border-celadon p-1"
						to="quiz"
					>
						Quiz
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
