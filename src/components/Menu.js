import React from "react";
import {Link} from "react-router-dom";
export default function Menu(props) {
    return (
      <section id="menu">
        <div className="container">
          <div className="menu-area">
            <div className="navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  
                  <li>
                    <a href="/">HOME</a>
                  </li>
                  {props.categories.map((Category,key) => {
                    return <li key={key}>
                      <Link to={"/category?name="+Category}>{Category.toUpperCase()}</Link>
                    </li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
