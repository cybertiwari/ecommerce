import React, {useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Product from './Product';

export default function Products(props) {
	
	const [searchParams, setSearchParams] = useSearchParams();
	const isCategory = searchParams.has('name')
	let url = '';
	let categoryName = 'all';
	if(isCategory){
		categoryName = searchParams.get('name')
		url = "https://fakestoreapi.com/products/category/"+categoryName;
	}else{
		url = "https://fakestoreapi.com/products";
	}
	console.log(categoryName);
    const [products,setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
				setIsLoaded(true);
				setProducts(result);
            },
            (error) => {
				setIsLoaded(true);
				setError(error);
            }
        )
    }, [])
	if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div id="wpf-loader-two">          
                <div className="wpf-loader-two-inner">
                    <span>Loading</span>
                </div>
            </div> 
        )
    } else {
		return (
			<>
			<section id="aa-catg-head-banner">
				<img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img"/>
				<div className="aa-catg-head-banner-area">
					<div className="container">
					<div className="aa-catg-head-banner-content">
						<h2>Products</h2>
						<ol className="breadcrumb">
						<li><a href="index.html">Home</a></li>         
						<li className="active">{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</li>
						</ol>
					</div>
					</div>
				</div>
			</section>
			<section id="aa-product-category">
				<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 ">
					<div className="aa-product-catg-content">
						<div className="aa-product-catg-body">
						<ul className="aa-product-catg">
						{products.map((product) => {
						 	return <Product item={product}/>
						})}
						</ul>
						<div className="modal fade" id="quick-view-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
							<div className="modal-dialog">
							<div className="modal-content">                      
								<div className="modal-body">
								<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<div className="row">
									<div className="col-md-6 col-sm-6 col-xs-12">                              
									<div className="aa-product-view-slider">                                
										<div className="simpleLens-gallery-container" id="demo-1">
										<div className="simpleLens-container">
											<div className="simpleLens-big-image-container">
												<a className="simpleLens-lens-image" data-lens-image="img/view-slider/large/polo-shirt-1.png">
													<img src="img/view-slider/medium/polo-shirt-1.png" className="simpleLens-big-image"/>
												</a>
											</div>
										</div>
										<div className="simpleLens-thumbnails-container">
											<a href="#" className="simpleLens-thumbnail-wrapper"
												data-lens-image="img/view-slider/large/polo-shirt-1.png"
												data-big-image="img/view-slider/medium/polo-shirt-1.png">
												<img src="img/view-slider/thumbnail/polo-shirt-1.png"/>
											</a>                                    
											<a href="#" className="simpleLens-thumbnail-wrapper"
												data-lens-image="img/view-slider/large/polo-shirt-3.png"
												data-big-image="img/view-slider/medium/polo-shirt-3.png">
												<img src="img/view-slider/thumbnail/polo-shirt-3.png"/>
											</a>

											<a href="#" className="simpleLens-thumbnail-wrapper"
												data-lens-image="img/view-slider/large/polo-shirt-4.png"
												data-big-image="img/view-slider/medium/polo-shirt-4.png">
												<img src="img/view-slider/thumbnail/polo-shirt-4.png"/>
											</a>
										</div>
										</div>
									</div>
									</div>
									<div className="col-md-6 col-sm-6 col-xs-12">
									<div className="aa-product-view-content">
										<h3>T-Shirt</h3>
										<div className="aa-price-block">
										<span className="aa-product-view-price">$34.99</span>
										<p className="aa-product-avilability">Avilability: <span>In stock</span></p>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi, veritatis quae repudiandae quod nulla porro quidem, itaque quis quaerat!</p>
										<h4>Size</h4>
										<div className="aa-prod-view-size">
										<a href="#">S</a>
										<a href="#">M</a>
										<a href="#">L</a>
										<a href="#">XL</a>
										</div>
										<div className="aa-prod-quantity">
										<form action="">
											<select name="" id="">
											<option value="0">1</option>
											<option value="1">2</option>
											<option value="2">3</option>
											<option value="3">4</option>
											<option value="4">5</option>
											<option value="5">6</option>
											</select>
										</form>
										<p className="aa-prod-category">
											Category: <a href="#">Polo T-Shirt</a>
										</p>
										</div>
										<div className="aa-prod-view-bottom">
										<a href="#" className="aa-add-to-cart-btn"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
										<a href="#" className="aa-add-to-cart-btn">View Details</a>
										</div>
									</div>
									</div>
								</div>
								</div>                        
							</div>
							</div>
						</div>
						</div>
						{/* <div className="aa-product-catg-pagination">
						<nav>
							<ul className="pagination">
							<li>
								<a href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
								</a>
							</li>
							<li><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">4</a></li>
							<li><a href="#">5</a></li>
							<li>
								<a href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
								</a>
							</li>
							</ul>
						</nav>
						</div> */}
					</div>
					</div>
				</div>
				</div>
			</section>
			</>
		)
    }
  
}
