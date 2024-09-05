import React, { useState } from "react";
import CrossOutDiv from "../components/CrossOutDiv";

const GroceryListPage = () => {
	const [ingr, setIngr] = useState([
		"100g kip",
		"100g rijst",
		"1 aardappel",
		"1 ui",
		"1 visstick",
		"1 blabla",
		"1 asdff",
		"1 vidfsadfsadfsafsstick",
		"1 visstfdfsfaick",
		"1 vissadfsdafstick",
		"1 vissdsafdsafdsatick",
		"1 vissfdsafdasfasdftick",
		"1 visdsafsafdsafstick",
		"1 visstfffick",
		"1 vissfffdsfsfasftick",
		"1 vissdasfadsfsadtick",
	]);

	const [filter, setFilter] = useState("sun-wed");
	return (
		<div className="container">
			<div className="box">
				<div className="grocery-container-parent">
					<div className="grocery-container">
						{ingr.map((ingr) => (
							<CrossOutDiv text={ingr} />
						))}
					</div>
				</div>

				<div className="day-button-container">
					<div
						className="day-button"
						onClick={() => {
							setFilter("sun-wed");
						}}
					>
						Zondag - Woensdag
					</div>
					<div
						className="day-button"
						onClick={() => {
							setFilter("don-sat");
						}}
					>
						Donderdag - Zaterdag
					</div>
				</div>
			</div>
			<div className="bottom-button-container">
				<div
					className="bottom-button"
					onClick={() => {
						window.location.assign("/");
					}}
				>
					<div className="bottom-button-text">Alle Gerechten</div>
				</div>
				<div
					className="bottom-button"
					onClick={() => {
						window.location.assign("/boodschappenlijstje");
					}}
				>
					<div className="bottom-button-text">Boodschappenlijstje</div>
				</div>
				<div
					className="bottom-button"
					onClick={() => {
						window.location.assign("/weekmenu");
					}}
				>
					<div className="bottom-button-text">Weekmenu</div>
				</div>
			</div>
		</div>
	);
};

export default GroceryListPage;
