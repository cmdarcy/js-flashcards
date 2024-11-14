import React from "react";

function WelcomeInfo() {
	return (
		<>
			<h2 className="text-white text-2xl">Welcome</h2>
			<p className="text-white max-w-prose">
				This website was built to help students currently enrolled in dev30.
				Feel free to use the flashcards to study JavaScript topics covered
				throughout the course.
			</p>
			<p className="text-white max-w-prose">
				If you would like to add your own flashcards or decks create a pull
				request merging your new info into the src/cardsData.js file. Steps to
				create a pull request can be found at the github repo:
				<a
					className="text-celadon underline"
					href="https://github.com/cmdarcy/js-flashcards"
					target="_blank"
				>
					here
				</a>
				.
			</p>
		</>
	);
}

export default WelcomeInfo;
