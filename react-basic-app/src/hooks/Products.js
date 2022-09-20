import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../config/config.js';
import Modal from 'react-modal';
import { Fade, Zoom } from "react-reveal";
import { connect } from "react-redux";
import {fetchProducts} from '../redux/actions/productActions';

function Products() {
  const [products, setProducts] = useState([]);
  var [modal, setModal] = useState(null);
  console.log("modal: " + modal);

  useEffect(() => {
    axios.get(global.AppConfig.serverIp + "/pub/product/list_all_product")
      .then((response) => {
        console.log("List_All_Products_Response", response.data);
        // let sortedProducts = response.data.data.slice().sort((a,b) => (
        //   ((a.id < b.id)? 1 : -1)
        // ))
        setProducts(response.data.data);
      }) 
      .catch(function (error){
        console.log("List_All_Products_Error", error);
      })
  }, []);

  //set modal state to object to open product details
  const openProductDetails = (product) => {
    setModal(product);
  }

  //list products in the home page and edit the detail page
  const listProducts = () => {
    return <> <Fade cascade>
    <ul className='products'>
      { !products ? <div>Loading...</div> :
      products.map(product => (
        <li key={product.id}>
          <a href={"#" + product.id} onClick={() => openProductDetails(product)} >
            <img className="products-img" src={product.img} alt={product.name}/>
            <h3>{product.name}</h3>
          </a>
          <div>{"$"}{product.price}</div>
        </li>
      ))}
    </ul>
    </Fade>
    
    {modal && 
      (<Fade cascade>
      <Modal isOpen={true}
        ariaHideApp={false}
            aria-labelledby="contained-modal-title-vcenter">
        <Zoom>
        <div className="modal-details">
          <img src={modal.img} alt={modal.name} />
          <h3>{modal.name}</h3>
        </div>
        <button className="close-modal" onClick={() => setModal(null)}>
           x
        </button>

        </Zoom>
      </Modal>
      </Fade>)}
      </>
  }

  return (
    <div>
      {listProducts()}
    </div>
  )
}
export default connect((state)=>({ products:state.products.items }), {
  fetchProducts,
})(Products);

