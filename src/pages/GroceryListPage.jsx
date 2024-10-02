import React, { useEffect, useState } from "react";
import CrossOutDiv from "../components/CrossOutDiv";

const GroceryListPage = () => {
	const [ingr, setIngr] = useState([]);

	const [filter, setFilter] = useState("sun-wed");

	useEffect(() => {
		fetch("http://localhost:8080/api/schedule/getingredients/" + filter)
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((response) => {
				console.log(response);
				setIngr(response);
			});
	}, [filter]);

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
