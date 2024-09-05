import React, { useState } from "react";
import "./style.css";
import GridWithSlider from "../components/GridWithSlider";

const RecipesPage = () => {
	const [recipes, setRecipes] = useState([
		{
			id: 1,
			name: "Kip Siam",
			type: "ontbijt",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
		{
			id: 2,
			name: "Kip Siam",
			type: "lunch",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
		{
			id: 3,
			name: "Kip Siam",
			type: "lunch",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
		{
			id: 4,
			name: "Kip Siam",
			type: "lunch",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
		{
			id: 5,
			name: "Kip Siam",
			type: "diner",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
		{
			id: 6,
			name: "Kip Siam",
			type: "dessert",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
		{
			id: 7,
			name: "Kip Siam",
			type: "lunch",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
		{
			id: 8,
			name: "Kip Siam",
			type: "lunch",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
		{
			id: 9,
			name: "Kip Siam",
			type: "diner",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
		{
			id: 10,
			name: "Kip Siam",
			type: "ontbijt",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
		{
			id: 11,
			name: "Kip Siam",
			type: "lunch",
			image: "https://i.imgur.com/Q3JXx4Z.png",
			ingredients: [
				"100g kip",
				"100g rijst",
				"1 aardappel",
				"1 ui",
				"1 visstick",
			],
			recipe: "kook alles en eet het op",
		},
	]);

	const [filter, setFilter] = useState("ontbijt");

	function getFilteredRecipes() {
		return recipes.filter((item) => item.type === filter);
	}

	return (
		<div className="container">
			<div className="box">
				<GridWithSlider items={getFilteredRecipes()} />
				<div className="filter-container">
					<div
						className={`${
							filter !== "ontbijt" ? "filter-button" : "filter-button-selected"
						}`}
						onClick={() => {
							setFilter("ontbijt");
						}}
					>
						Ontbijt
					</div>
					<div
						className={`${
							filter !== "lunch" ? "filter-button" : "filter-button-selected"
						}`}
						onClick={() => {
							setFilter("lunch");
						}}
					>
						Lunch
					</div>
					<div
						className={`${
							filter !== "diner" ? "filter-button" : "filter-button-selected"
						}`}
						onClick={() => {
							setFilter("diner");
						}}
					>
						Diner
					</div>
					<div
						className={`${
							filter !== "dessert" ? "filter-button" : "filter-button-selected"
						}`}
						onClick={() => {
							setFilter("dessert");
						}}
					>
						Dessert
					</div>
				</div>
				<div
					className="create-button-container"
					onClick={() => {
						window.location.assign("/nieuwrecept");
					}}
				>
					<div className="create-button">Nieuw Recept</div>
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
		</div>
	);
};

export default RecipesPage;
