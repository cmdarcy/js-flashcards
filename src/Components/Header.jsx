import React from "react";
import Nav from "./Nav";

function Header() {
	return (
		<header className="mb-2 bg-blush-dark w-full text-center pb-2">
			<h1 className="text-5xl text-cambridge_blue my-2">JS Flashcards</h1>
			<Nav />
		</header>
	);
}

export default Header;
