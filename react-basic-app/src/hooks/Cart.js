import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import Zoom from "react-reveal";

export default function Cart(props) {
    // set the value of click2 to close the modal
    const [click2, setClick2] = useState(props.click);

    const closeCart = () => {
        setClick2(false);
        props.handleCartClicked(click2);
        console.log("close cart");
      }

    useEffect(() => {
        props.handleCartClicked(click2);
    }, [click2])

    return (
      <div className='cart'>
        <Modal isOpen={true}
            onRequestClose={closeCart}
            ariaHideApp={false}
            width = {"100rem"} 
            aria-labelledby="contained-modal-title-vcenter">
                <Zoom>
                    <h1>123</h1>
                    <button className="close-modal" onClick={ closeCart || 
                                // pass click2 to App.js 
                        (() => props.handleCartClicked(click2))}>
                         x
                    </button> 
                </Zoom>
        </Modal>
      </div>
    )
  }
