import React from "react";
import "../pages/style.css";

const GridWithSlider = ({ items }) => {
	return (
		<div className="grid-container">
			{items.map((item, index) => (
				<div
					key={index}
					className="grid-box"
					onClick={() => window.location.assign("/kiesaantal/" + item.id)}
				>
					<img
						src={item.image || "https://via.placeholder.com/120"}
						alt={item.name}
					/>
					<div className="item-name">{item.name}</div>
				</div>
			))}
		</div>
	);
};

export default GridWithSlider;
