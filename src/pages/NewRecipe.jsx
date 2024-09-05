import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const NewRecipe = () => {
	const [ingr, setIngr] = useState([]);

	function addIngr(newIngr) {
		setIngr([...ingr, newIngr]);
	}

	function removeIngr(ingredient) {
		setIngr(ingr.filter((item) => item !== ingredient));
	}

	const [newIngr, setNewIngr] = useState("");

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
								onChange={(e) => {
									setNewIngr(e.target.value);
								}}
							/>
							<Button
								variant="contained"
								style={{}}
								onClick={() => {
									addIngr(newIngr);
								}}
							>
								voeg toe
							</Button>
						</div>
						<TextField
							id="outlined-basic"
							label="Bereidingswijze"
							variant="outlined"
							style={{ marginTop: "20px" }}
							multiline={true}
							rows={6}
						/>

						<TextField
							id="outlined-basic"
							label="Foto (imgur link)"
							variant="outlined"
							style={{ marginTop: "20px" }}
						/>

						<Button
							variant="contained"
							style={{ marginTop: "20px" }}
							onClick={() => {
								window.location.assign("/");
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

export default NewRecipe;
