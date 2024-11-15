import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
function MainLayout() {
	return (
		<div className="flex flex-col items-center min-h-full bg-gradient-to-b from-cambridge_blue to-blush">
			<Header></Header>
			<main className="flex flex-col items-center bg-charcoal p-4 rounded-md">
				<Outlet />
			</main>
			<Footer></Footer>
		</div>
	);
}

export default MainLayout;
