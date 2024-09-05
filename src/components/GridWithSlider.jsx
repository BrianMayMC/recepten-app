import React from "react";
import "../pages/style.css";

const GridWithSlider = ({ items }) => {
	return (
		<div className="grid-container">
			{items.map((item, index) => (
				<div
					onClick={() => {
						window.location.assign("/weekmenu/" + item.id);
					}}
					key={index}
					className="grid-box"
				>
					<img src={item.image} alt="" />
					<div>{item.name}</div>
				</div>
			))}
		</div>
	);
};

export default GridWithSlider;
