import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RecipesPage from "./pages/RecipesPage";
import SchedulePage from "./pages/SchedulePage";
import GroceryListPage from "./pages/GroceryListPage";
import NewRecipe from "./pages/NewRecipe";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RecipesPage />} />
				<Route path="/weekmenu/:id" element={<SchedulePage />} />
				<Route path="/weekmenu" element={<SchedulePage />} />
				<Route path="/boodschappenlijstje" element={<GroceryListPage />} />
				<Route path="/nieuwrecept" element={<NewRecipe />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
