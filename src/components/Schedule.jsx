import React, { useEffect, useState } from "react";
import "../pages/style.css";

const daysOfWeek = ["Maa", "Din", "Woe", "Don", "Vri", "Zat", "Zon"];
const timeSlots = ["Ontbijt", "Lunch", "Diner", "Dessert"];

const Schedule = () => {
	const [id, setId] = useState("-1");
	const [recipeName, setRecipeName] = useState("");
	const [people, setPeople] = useState(1);

	useEffect(() => {
		let url = window.location.href;
		let recipeId = "-1";

		if (url.split("/").length === 6) {
			recipeId = url.split("/")[4];
			setId(url.split("/")[4]);
			setPeople(url.split("/")[5]);
		}

		console.log(recipeId);

		if (recipeId === "-1") return;

		fetch("http://localhost:8080/api/recipe/getname/" + recipeId)
			.then((response) => response.json())
			.then((response) => {
				setRecipeName(response.name);
			});
	}, [id]);

	useEffect(() => {
		fetch("http://localhost:8080/api/schedule/")
			.then((response) => response.json())
			.then((response) => {
				let initialSchedule = [];
				console.log(response);
				response
					.map((item) => ({
						day: getCapitalDay(item.day),
						timeSlot: getCapitalTimeSlot(item.dayType),
						content: item.recipeName,
						people: item.people,
					}))
					.forEach((item) => {
						initialSchedule[`${item.timeSlot}-${item.day}`] =
							item.content + " (" + item.people + " P)";
					});
				console.log(initialSchedule);
				setSchedule(initialSchedule);
			});
	}, []);

	function getCapitalDay(day) {
		switch (day) {
			case "MAA":
				return "Maa";
			case "DIN":
				return "Din";
			case "WOE":
				return "Woe";
			case "DON":
				return "Don";
			case "VRI":
				return "Vri";
			case "ZAT":
				return "Zat";
			case "ZON":
				return "Zon";
		}
	}

	function getCapitalTimeSlot(timeSlot) {
		switch (timeSlot) {
			case "ONTBIJT":
				return "Ontbijt";
			case "LUNCH":
				return "Lunch";
			case "DINER":
				return "Diner";
			case "DESSERT":
				return "Dessert";
		}
	}

	// Create state to store values
	const [schedule, setSchedule] = useState(() =>
		timeSlots.reduce((acc, slot) => {
			daysOfWeek.forEach((day) => {
				acc[`${slot}-${day}`] = "";
			});
			return acc;
		}, {})
	);

	function addItemToCalendar(itemId, timeSlot, day) {
		fetch("http://localhost:8080/api/schedule/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				day: day.toUpperCase(),
				dayType: timeSlot.toUpperCase(),
				recipeId: itemId,
				recipeName: recipeName,
				people: people,
			}),
		}).then(() => {
			console.log("Adding");
			setSchedule((prev) => ({
				...prev,
				[`${timeSlot}-${day}`]: recipeName + " (" + people + " P)",
			}));
		});
	}

	// Handle click to remove content
	const handleClick = (slot, day) => {
		if (!schedule[`${slot}-${day}`] || schedule[`${slot}-${day}`] === "") {
			// This is an empty cell, handle accordingly
			if (id !== "-1") {
				addItemToCalendar(id, slot, day);
			}
			console.log(`Clicked on empty cell at ${slot} on ${day}`);
		} else {
			// Remove content if cell is not empty
			setSchedule((prev) => ({
				...prev,
				[`${slot}-${day}`]: "",
			}));
			console.log("deleting");
			fetch("http://localhost:8080/api/schedule/remove", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					day: day.toUpperCase(),
					dayType: slot.toUpperCase(),
					recipeId: id,
				}),
			});
		}
	};

	return (
		<div className="schedule-container">
			<div className="schedule">
				{/* Header Row */}
				<div className="header"></div>
				{daysOfWeek.map((day, index) => (
					<div key={index} className="header">
						{day}
					</div>
				))}

				{/* Time Slots */}
				{timeSlots.map((slot, index) => (
					<React.Fragment key={index}>
						<div className="time-slot">{slot}</div>
						{daysOfWeek.map((day, dayIndex) => (
							<div
								key={dayIndex}
								className="cell"
								onClick={() => handleClick(slot, day)}
							>
								{schedule[`${slot}-${day}`]}
							</div>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Schedule;
