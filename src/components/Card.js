import { Link } from "react-router-dom";
import slugify from "slugify";

import AddToBasketBtn from "./AddToBasketBtn";

const Card = ({ product }) => {
	return (
		<div className="card-storeec">
			<Link to={`/product/${slugify(product.title, { lower: true, strict: true })}-${product.id}`}>
				<section className="card-section">
					<img src={product.image} alt="Denim Jeans"/>
				</section>
				<h1>{product.title.substring(0,10)}...</h1>
				<p className="price-storeec">&#x20B9;{product.price}</p>
				<p>{product.description.substring(0,20)}...</p>
				<p>
					<AddToBasketBtn data={product} />
				</p>
			</Link>
		</div>
	);
};

export default Card;
