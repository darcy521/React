import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './hooks/Cart';
import Filter from './hooks/Filter';
import Products from './hooks/Products';

export default function App() {
  
  const [username, setUsername] = useState("");
  // use isLoggedIn to check if the user has signed in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [cartItems, setCartItems] = useState(1);

  // set the value of click to load Cart function
  const [click, setClick] = useState(false);
  
  // set click state to true to open the cartModal
  const openCart = () => {
    setClick(true);
    console.log("open cart");
  }

  const login = () => {
    console.log("check login state: ");
  }

  function formatName (username) {
    setUsername(username);
  }
  
  // refresh click statement by setting click to undefined
  // const handleCartClicked = (childToParent) => {
  //     setClick(childToParent);
  //     console.log("click: "+ click);
  //     console.log("childData: "+ childToParent);
  // }
  

  useEffect(() => {

  }, [])

    return (
      <div className='grid-container'>
      <header>
        <div className='navbar'> 
          <a href='/'>MiniShopping</a>
          <div className='cart-icon-items'>
          {cartItems <= 0 ? <></>: <div className='cart-items'>{cartItems}</div>}
          <button className='cart-icon'
                  onClick={openCart}>
          <img src='cart-icon.png' alt=' ' 
                width={"45px"} 
                ></img> 
          </button>
          </div>
          <div className='dropdown-list'>
            {isLoggedIn? <button width={"45px"}>username</button> : 
                          <a href='/login'>login</a>}
            
            <div className='dropdown-content'>
              <a href='/'>Sell Product</a>
              <a href='/history'>history</a>
            </div>
          </div>
        </div> 
      </header>
      <main>
      <Filter />
      <hr></hr> 
      <Products />
      {click && (<Cart 
         click = {click}
         handleCartClicked = {a => setClick(a)}
        />)}
      </main>
      <footer>All right is reserved.</footer>
    </div>
    );
  }


