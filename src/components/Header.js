import React from 'react'

export default function Header() {
  return (
    <header id="aa-header">
    <div className="aa-header-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-header-top-area">
              <div className="aa-header-top-left">
                <div className="aa-language">
                  <div className="dropdown">
                    <a className="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <img src="img/flag/english.jpg" alt="english flag"/>ENGLISH
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li><a href="#"><img src="img/flag/french.jpg" alt=""/>FRENCH</a></li>
                      <li><a href="#"><img src="img/flag/english.jpg" alt=""/>ENGLISH</a></li>
                    </ul>
                  </div>
                </div>

                <div className="aa-currency">
                  <div className="dropdown">
                    <a className="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <i className="fa fa-usd"></i>USD
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li><a href="#"><i className="fa fa-euro"></i>EURO</a></li>
                      <li><a href="#"><i className="fa fa-jpy"></i>YEN</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="aa-header-top-right">
                <ul className="aa-head-top-nav-right">
                  <li><a href="account.html">My Account</a></li>
                  <li className="hidden-xs"><a href="cart.html">My Cart</a></li>
                  <li><a href="" data-toggle="modal" data-target="#login-modal">Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="aa-header-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-header-bottom-area">
              <div className="aa-logo">
                <a href="/">
                  <span className="fa fa-shopping-cart"></span>
                  <p>Sun<strong>Store</strong> <span>Your Shopping Partner</span></p>
                </a>
              </div>
              
              <div className="aa-cartbox">
                <a className="aa-cart-link" href="cart.html">
                  <span className="fa fa-shopping-basket"></span>
                  <span className="aa-cart-title">SHOPPING CART</span>
                  <span className="aa-cart-notify">2</span>
                </a>
                
              </div>
              <div className="aa-search-box">
                <form action="">
                  <input type="text" name="" id="" placeholder="Search here ex. 'man' "/>
                  <button type="submit"><span className="fa fa-search"></span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
