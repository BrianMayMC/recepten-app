import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RecipesPage from "./pages/RecipesPage";
import SchedulePage from "./pages/SchedulePage";
import GroceryListPage from "./pages/GroceryListPage";
import NewRecipe from "./pages/NewRecipe";
import EditRecipe from "./pages/EditRecipe";
import ChoosePeople from "./pages/ChoosePeople";
import TestDesign from "./pages/TestDesign";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RecipesPage />} />
				<Route path="/weekmenu/:id/:id" element={<SchedulePage />} />
				<Route path="/weekmenu" element={<SchedulePage />} />
				<Route path="/boodschappenlijstje" element={<GroceryListPage />} />
				<Route path="/nieuwrecept" element={<NewRecipe />} />
				<Route path="/editrecept/:id" element={<EditRecipe />} />
				<Route path="/kiesaantal/:id" element={<ChoosePeople />} />
				<Route path="/test" element={<TestDesign />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
