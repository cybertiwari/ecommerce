import React, { useState, useEffect } from 'react'
import styles from "./styles/App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import clsx from "clsx";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Category from "./pages/Category";
import Header from "./components/Header";
import BasketSidebar from "./components/BasketSidebar";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import useMobileDetect from "./hooks/useMobileDetect";
import BasketContextProvider from "./context/BasketContext";

const App = () => {
	const device = useMobileDetect();
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [data, setData] = useState([]);
	const [filter, setFilterProduct] = useState([]);
	const filterProduct = (category) => {
		const updateList = data.filter((x) => x.category === category);
		setFilterProduct(updateList);
	}
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then(res => res.json())
			.then(
				(result) => {
					setData(result);
					setFilterProduct(result);
					setIsLoaded(true);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, []);
	if (!isLoaded) {
		return (
			<div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
				<div className="spinner-border text-success" style={{ width: '5rem', height: '5rem' }} role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	} else {
		return (
			<Router>
				<BasketContextProvider>
					<div className={clsx(device.type === "mobile" && styles.paddingForMobile, styles.container)}>
						<Header setFilter={setFilterProduct} filterProduct={filterProduct} products={data} />
						<main className={styles.main}>
							<Switch>
								<Route path="/" exact>
									<Home products={filter} />
								</Route>
								<Route path="/product/:slug">
									<Detail />
								</Route>
								<Route path="/category">
									<Category products={filter} />
								</Route>
							</Switch>
						</main>
						<Footer />
					</div>
					<BasketSidebar />
					{device.type === "mobile" && <MobileBottomNav />}
				</BasketContextProvider>
			</Router>
		);
	}
};

export default App;
