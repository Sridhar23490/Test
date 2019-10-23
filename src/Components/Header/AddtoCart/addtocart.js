import React, { Component } from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/footer'
import '../AddtoCart/addtocart.css'

class addtocart extends Component {


    render() {
        var activeProduct = sessionStorage.getItem('activeProduct');
       activeProduct = JSON.parse(activeProduct);
        console.log('activeProduct',activeProduct);
        return (
            <div>
                <header><Header name="Welcome to BUY SMART" /></header>
                <div className="jumbotron title-tag">
                        <p id="title-id"><strong>Items</strong> in ur cart</p>
                        <span>
                            <button className="btn btn-success bt-title">
                                Login to proceed
                            </button>
                        </span>
                    </div>
                {activeProduct.map((item)=>{
                 return(
                    <div>
                   
                    <div className="jumbotron prod-tag">
                        <span><img id="prod-img" src={item.img}></img></span>
                        <button className="btn btn-dark bt-add">Add</button>
                        <span id="prod-name"><strong>{item.name}</strong></span>
                        <span id="prod-aprice">₹ {item.actualPrice}</span>
                        <span id="prod-oprice"><strike>₹ {item.originalPrice}</strike></span>
                        <span id="prod-dis-percent">{item.discountPercent} %</span>
                        <button className="btn btn-dark bt-remove">Remove</button>
                        <button className="btn btn-dark bt-save">Save for later</button>
                    </div>
                    
                    <div className="jumbotron del-tag">

                    </div>
                </div>
                 );   
                })}
               
                <footer><Footer /></footer>
            </div>
        )
    }
}

export default addtocart
