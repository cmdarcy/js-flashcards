import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import DecksPage from "./Layout/DecksPage.jsx";
import DeckPage from "./Layout/DeckPage.jsx";
import QuizPage from "./Layout/QuizPage.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route path="decks" element={<DecksPage />}></Route>
			<Route path="decks/:deckTitle" element={<DeckPage />} />
			<Route path="quiz" element={<QuizPage />} />
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</StrictMode>
);
