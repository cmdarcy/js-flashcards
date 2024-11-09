import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
function MainLayout() {
	return (
		<>
			<Header></Header>
			<Outlet />
			<Footer></Footer>
		</>
	);
}

export default MainLayout;
