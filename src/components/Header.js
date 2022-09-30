import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import useMakeRequest from "../hooks/useMakeRequest";
import { BasketContext } from "../context/BasketContext";
import { useContext } from "react";

const Header = (props) => {
	const result = useMakeRequest("https://fakestoreapi.com/products/categories");
	const { basketItems, setBasketIsOpen, basketTotal: _basketTotal } = useContext(BasketContext);
	return (
		<header className="section-header">
			<section className="header-main border-bottom bg-white">
				<div className="container-fluid">
					<div className="row p-2 pt-3 pb-3 d-flex align-items-center">
						<div className="col-md-2">
						<Link to="/">
							<img className="d-none d-md-flex" src="/logo192.png" width="50" />
        				</Link>
						</div>
						<div className="col-md-8">
							<div className="d-flex form-inputs">
								<input className="form-control" type="text" placeholder="Search any product..." />
								{/* <i className="bx bx-search"></i> */}
							</div>
						</div>
						<div className="col-md-2"  
							onClick={(e) => {
								e.preventDefault();
								setBasketIsOpen((oldState) => !oldState);
							}}
						>
							<div className="d-flex d-none d-md-flex flex-row align-items-center">
								<span className="shop-bag"><i className='bx bxs-shopping-bag'></i></span>
								<div className="d-flex flex-column ms-2">
									<span className="qty">{basketItems.length} Product</span>
									<span className="fw-bold">{_basketTotal.toFixed(2)}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand d-md-none d-md-flex" href="#">Categories</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
      							<Link to="/"  onClick={() => props.setFilter(props.products)} className="nav-link">All</Link>
    						</li>
							{result.data 
							? result.data.map((cat, index) => <CategoryItem data={cat} key={index} filterProduct={props.filterProduct} />) 
							: <div>{result.error}</div>}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
};

export default Header;
