import React from 'react'
import './product.css'
export default function Product(props) {
    return (
        <li key={props.item.id}>
            <figure>
                <a className="product-img" href="#"><img src={props.item.image} alt="polo shirt img"/></a>
                <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                <figcaption>
                <h4 className="aa-product-title title"><a href="#">{props.item.title}</a></h4>
                <span className="aa-product-price price">${props.item.price}</span>
                </figcaption>
            </figure>                         
        </li>
    )
}
