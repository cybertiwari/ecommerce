import React from 'react'
import Subscribe from "../Subscribe";
import Banner from '../Banner';
export default function Index() {
    
        return (
            <>
                <Banner/>
                <section id="aa-product">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="row">
                            <div className="aa-product-area">
                            <div className="aa-product-inner">
                                <ul className="nav nav-tabs aa-products-tab">
                                    <li className="active"><a href="#men" data-toggle="tab">Electronics</a></li>
                                    <li><a href="#women" data-toggle="tab">Jewelery</a></li>
                                    <li><a href="#sports" data-toggle="tab">Men's clothing</a></li>
                                    <li><a href="#electronics" data-toggle="tab">Women's clothing</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade in active" id="men">
                                    <ul className="aa-product-catg">
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-2.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                        
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                          
                                        </div>
                                        <span className="aa-badge aa-sale" href="#">SALE!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/man/t-shirt-1.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">T-Shirt</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-1.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-4.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-hot" href="#">HOT!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-5.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">T-Shirt</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-6.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-2.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sale" href="#">SALE!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/man/t-shirt-1.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">T-Shirt</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                        </li>                        
                                    </ul>
                                    <a className="aa-browse-btn" href="/category">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                    </div>
                                    <div className="tab-pane fade" id="women">
                                    <ul className="aa-product-catg">
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/women/girl-1.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                                        </div>
                                        <span className="aa-badge aa-sale" href="#">SALE!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/women/girl-2.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-hot" href="#">HOT!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/women/girl-3.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/women/girl-4.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/women/girl-5.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>
                                        
                                        <div className="aa-product-hvr-content">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/women/girl-6.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/women/girl-7.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sale" href="#">SALE!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/women/girl-1.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                        </li>                        
                                    </ul>
                                    <a className="aa-browse-btn" href="/category">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                    </div>
                                    <div className="tab-pane fade" id="sports">
                                    <ul className="aa-product-catg">
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/sports/sport-1.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                          
                                        </div>
                                        <span className="aa-badge aa-sale" href="#">SALE!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/sports/sport-2.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/sports/sport-3.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/sports/sport-4.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-hot" href="#">HOT!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/sports/sport-5.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/sports/sport-6.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/sports/sport-7.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sale" href="#">SALE!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/sports/sport-8.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                        </li>                        
                                    </ul>
                                    </div>
                                    <div className="tab-pane fade" id="electronics">
                                    <ul className="aa-product-catg">
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/electronics/electronic-1.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                                        </div>
                                        <span className="aa-badge aa-sale" href="#">SALE!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/electronics/electronic-2.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/electronics/electronic-3.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/electronics/electronic-4.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-hot" href="#">HOT!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/electronics/electronic-5.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/electronics/electronic-6.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                         
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/electronics/electronic-7.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sale" href="#">SALE!</span>
                                        </li>
                                        <li>
                                        <figure>
                                            <a className="aa-product-img" href="#"><img src="img/electronics/electronic-8.png" alt="polo shirt img"/></a>
                                            <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                            <figcaption>
                                            <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                            <span className="aa-product-price">$45.50</span>
                                            </figcaption>
                                        </figure>                          
                                        <div className="aa-product-hvr-content">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                                        </div>
                                        <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                        </li>                        
                                    </ul>
                                    <a className="aa-browse-btn" href="/category">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <Subscribe/>
            </>
        )
}
