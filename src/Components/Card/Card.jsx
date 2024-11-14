import React from "react";

function Card({ title, description, extra_info }) {
	return (
		<div className="w-80 h-52 [perspective:1000px] text-center ">
			<div className="w-full h-full relative [transform-style:preserve-3d] transition-custom hover:[transform:rotateY(180deg)]">
				<div className="bg-cambridge_blue text-white flex items-center border-8 border-blush-dark rounded-lg justify-center text-2xl [transform:rotateY(0deg)] absolute w-full h-full backface-hidden">
					<p>{title}</p>
				</div>
				<div className="bg-celadon text-charcoal flex flex-col gap-5 items-center border-8 border-blush-dark rounded-lg justify-center text-sm [transform:rotateY(180deg)] absolute w-full h-full backface-hidden">
					<p>{description}</p>
					<p>{extra_info}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
