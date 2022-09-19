import Index from "./components/Index/Index";
import React, {useState,useEffect} from 'react'
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import NoRoute from "./components/NoRoute";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Products from "./components/Products/Products";
function App() {
    const [categories,setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setCategories(result);
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
          
          <Router>
            <Header />
            <Menu categories={categories}/>
            <Switch>
              <Route path="/" element={<Index/>} />
              <Route path="/category" element={<Products/>} />
              <Route path='*' element={<NoRoute/>} />
            </Switch>
          </Router>
          <Footer/>
        </>
      );
    }
}

export default App;
