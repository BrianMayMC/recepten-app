import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const ChoosePeople = () => {
	const [people, setPeople] = useState(1);

	let url = window.location.href;
	let recipeId = "-1";

	if (url.split("/").length === 5) {
		recipeId = url.split("/")[4];
	}

	if (recipeId === "-1") return;

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "100px",
				flexDirection: "column",
				gap: "50px",
			}}
		>
			<TextField
				placeholder="Aantal Mensen"
				value={people}
				onChange={(e) => {
					setPeople(e.target.value);
				}}
			/>
			<Button
				variant="contained"
				onClick={() => {
					window.location.assign("/weekmenu/" + recipeId + "/" + people);
				}}
			>
				Doorgaan met een aantal van: {people}
			</Button>
		</div>
	);
};

export default ChoosePeople;
