import React, { useEffect, useState } from "react";
import "./style.css";
import GridWithSlider from "../components/GridWithSlider";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";

const RecipesPage = () => {
	const [recipes, setRecipes] = useState([]);

	const [filter, setFilter] = useState("ONTBIJT");

	const [selectedOption, setSelectOption] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8080/api/recipe/" + filter)
			.then((res) => res.json())
			.then((json) => {
				setRecipes(json);
				setSelectOption(json[0]);
			});
	}, [filter]);

	const handleDelete = () => {};

	const handleEdit = () => {
		window.location.assign("/editrecipe/" + selectedOption.id);
	};

	return (
		<div className="container">
			<div className="box">
				<GridWithSlider items={recipes} />
				<div className="filter-container">
					<div
						className={`${
							filter !== "ONTBIJT" ? "filter-button" : "filter-button-selected"
						}`}
						onClick={() => {
							setFilter("ONTBIJT");
						}}
					>
						Ontbijt
					</div>
					<div
						className={`${
							filter !== "LUNCH" ? "filter-button" : "filter-button-selected"
						}`}
						onClick={() => {
							setFilter("LUNCH");
						}}
					>
						Lunch
					</div>
					<div
						className={`${
							filter !== "DINER" ? "filter-button" : "filter-button-selected"
						}`}
						onClick={() => {
							setFilter("DINER");
						}}
					>
						Diner
					</div>
					<div
						className={`${
							filter !== "DESSERT" ? "filter-button" : "filter-button-selected"
						}`}
						onClick={() => {
							setFilter("DESSERT");
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

				<div className="bottom-button-wrapper">
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
				<div className="option-container">
					<FormControl>
						<InputLabel id="option-select-label">Selecteer optie</InputLabel>
						<Select
							value={selectedOption}
							labelId="option-select-label"
							label="Selecteer optie"
							placeholder="Selecteer optie"
							onChange={(e) => setSelectOption(e.target.value)}
							style={{ minWidth: "200px" }}
						>
							{recipes.map((recipe) => (
								<MenuItem value={recipe.name}>{recipe.name}</MenuItem>
							))}
						</Select>
					</FormControl>
					<div className="option-button-container">
						<Button
							variant="contained"
							onClick={() => {
								handleDelete();
							}}
						>
							Verwijderen
						</Button>
						<Button
							variant="contained"
							onClick={() => {
								handleEdit();
							}}
						>
							Aanpassen
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipesPage;
