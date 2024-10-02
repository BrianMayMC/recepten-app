import React from "react";
import "./test.css";

const ingredients = {
	firstHalf: [
		{ name: "Tomaten", icon: "🍅" },
		{ name: "Komkommers", icon: "🥒" },
		// Voeg meer ingrediënten toe
	],
	secondHalf: [
		{ name: "Aardappelen", icon: "🥔" },
		{ name: "Wortelen", icon: "🥕" },
		// Voeg meer ingrediënten toe
	],
};

const IngredientList = ({ title, items }) => (
	<div className="ingredient-section">
		<h2>{title}</h2>
		<ul>
			{items.map((item, index) => (
				<li key={index}>
					<span className="icon">{item.icon}</span> {item.name}
				</li>
			))}
		</ul>
	</div>
);

const TestDesign = () => (
	<div className="app">
		<header>
			<h1>Weekmenu Ingrediënten</h1>
			<nav>
				<button>Vorige Week</button>
				<button>Volgende Week</button>
			</nav>
		</header>
		<main>
			<IngredientList
				title="Eerste Helft van de Week"
				items={ingredients.firstHalf}
			/>
			<IngredientList
				title="Tweede Helft van de Week"
				items={ingredients.secondHalf}
			/>
		</main>
	</div>
);
export default TestDesign;
