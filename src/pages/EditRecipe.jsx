import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import React, { useState } from "react";

const EditRecipe = () => {
	const [name, setName] = useState("");
	const [dayType, setDayType] = useState("");
	const [recipe, setRecipe] = useState("");
	const [image, setImage] = useState("");
	const [ingr, setIngr] = useState([]);

	function addIngr(newIngr) {
		setIngr([...ingr, newIngr]);
	}

	function removeIngr(ingredient) {
		setIngr(ingr.filter((item) => item !== ingredient));
	}

	const [newIngr, setNewIngr] = useState("");

	function handleCreateRecipe() {
		if (name === "" || dayType === "" || recipe === "" || image === "") {
			alert("Niet alles is ingevuld!");
			return;
		}

		fetch("http://localhost:8080/api/recipe/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				ingredients: ingr,
				dayType: dayType,
				recipe: recipe,
				image: image,
			}),
		}).then((response) => {
			window.location.assign("/");
		});
	}

	return (
		<div className="container">
			<div className="box">
				<div className="form-container-parent">
					<div className="ingredients">
						<h1>Ingredienten Lijst</h1>
						{ingr.map((ingr) => (
							<div
								style={{ cursor: "pointer" }}
								onClick={() => {
									removeIngr(ingr);
								}}
							>
								{ingr}
							</div>
						))}
					</div>

					<div className="form-container" style={{ marginLeft: "50px" }}>
						<TextField
							id="outlined-basic"
							label="Naam"
							variant="outlined"
							style={{ marginTop: "20px" }}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>

						<div
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<TextField
								id="outlined-basic"
								label="Ingredient"
								variant="outlined"
								style={{ marginTop: "20px" }}
								value={newIngr}
								onChange={(e) => {
									setNewIngr(e.target.value);
								}}
							/>
							<Button
								variant="contained"
								style={{}}
								onClick={() => {
									setNewIngr("");
									addIngr(newIngr);
								}}
							>
								voeg toe
							</Button>
						</div>
						<br />
						<FormControl>
							<InputLabel id="dagtype-label">Dag type</InputLabel>
							<Select
								labelId="dagtype-label"
								label="Dag type"
								onChange={(e) => setDayType(e.target.value)}
							>
								<MenuItem value={"ONTBIJT"}>Ontbijt</MenuItem>
								<MenuItem value={"LUNCH"}>Lunch</MenuItem>
								<MenuItem value={"DINER"}>Diner</MenuItem>
								<MenuItem value={"DESSERT"}>Dessert</MenuItem>
							</Select>
						</FormControl>

						<TextField
							id="outlined-basic"
							label="Bereidingswijze"
							variant="outlined"
							style={{ marginTop: "20px" }}
							multiline={true}
							rows={6}
							onChange={(e) => {
								setRecipe(e.target.value);
							}}
						/>

						<TextField
							id="outlined-basic"
							label="Foto (imgur link)"
							variant="outlined"
							style={{ marginTop: "20px" }}
							onChange={(e) => {
								setImage(e.target.value);
							}}
						/>

						<Button
							variant="contained"
							style={{ marginTop: "20px" }}
							onClick={() => {
								handleCreateRecipe();
							}}
						>
							Maak Recept
						</Button>
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
		</div>
	);
};

export default EditRecipe;
