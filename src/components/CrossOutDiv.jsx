import React, { useState } from "react";

const CrossOutDiv = ({ text }) => {
	// State to manage whether the div is crossed out
	const [isCrossedOut, setIsCrossedOut] = useState(false);

	// Toggle the crossed-out state on click
	const handleClick = () => {
		setIsCrossedOut(!isCrossedOut);
	};

	return (
		<div
			className={`crossout-div ${isCrossedOut ? "crossed-out" : ""}`}
			onClick={handleClick}
		>
			{text}
		</div>
	);
};

export default CrossOutDiv;
