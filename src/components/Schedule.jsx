import React, { useEffect, useState } from "react";
import "../pages/style.css";

const daysOfWeek = ["Maa", "Din", "Woe", "Don", "Vri", "Zat", "Zon"];
const timeSlots = ["Ontbijt", "Lunch", "Diner", "Dessert"];

const initialItems = [
	{ day: "Maa", timeSlot: "Ontbijt", content: "Ei Salade" },
	{ day: "Din", timeSlot: "Diner", content: "Hamburger Bowl" },
	// Add more items as needed
];

const Schedule = () => {
	let id = -1;
	let url = window.location.href;
	if (url.split("/").length === 5) {
		id = url.split("/")[4];
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
		setSchedule((prev) => ({
			...prev,
			[`${timeSlot}-${day}`]: "Whatever " + itemId + " is",
		}));
	}

	// Use useEffect to set initial items once
	useEffect(() => {
		const initialSchedule = { ...schedule };
		initialItems.forEach((item) => {
			initialSchedule[`${item.timeSlot}-${item.day}`] = item.content;
		});
		setSchedule(initialSchedule);
	}, []); // Empty dependency array ensures this runs once on mount

	// Handle click to remove content
	const handleClick = (slot, day) => {
		if (schedule[`${slot}-${day}`] === "") {
			// This is an empty cell, handle accordingly
			if (id !== -1) {
				addItemToCalendar(id, slot, day);
			}
			console.log(`Clicked on empty cell at ${slot} on ${day}`);
		} else {
			// Remove content if cell is not empty
			setSchedule((prev) => ({
				...prev,
				[`${slot}-${day}`]: "",
			}));
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
