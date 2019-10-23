import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../ProductPage/productpage.css'


class productpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImg: {}
        }
    }

    discountprice(org, percent) {
        var discounted_Price = org * percent / 100;
        var discount_Price = org - discounted_Price;
        return discount_Price;
    }

    buy_bt(currprod) {
        console.log(currprod)
        var currprodArr;
        var activeProduct = sessionStorage.getItem('activeProduct');
        activeProduct = JSON.parse(activeProduct);
        if(activeProduct && activeProduct.length > 0){
            currprodArr = activeProduct;
        }else{
            currprodArr = [];
        }
        currprodArr.push(currprod);
        sessionStorage.setItem('activeProduct', JSON.stringify(currprodArr));
        window.location.href = "/addtocart";
    }

    render() {
        var productImage = this.props.productReducer.activeProduct;
        var currentImg = {};
        productImage.map((prod) => {
            if (prod.name === this.props.productname) {
                currentImg = prod;
            }
            return true;
        })
        var actualPrice = this.discountprice(currentImg.originalPrice, currentImg.discountPercent);
        currentImg['actualPrice'] = actualPrice;

        return (
            <div className="">
                <div className="jumbotron product-tag">
                    <img id="image-size" src={currentImg.img} alt='s' />
                    <span className="container description-tag">
                        <p><strong>{currentImg.name}</strong></p>
                        <p><strong>Original Price: ₹ </strong><strike>{currentImg.originalPrice}</strike></p>
                        <p><strong>Discount Price: </strong>{actualPrice}</p>
                        <p><strong>Save: </strong>{currentImg.discountPercent}% Offer</p>
                        <p id="txt-align"><strong>Description: </strong>{currentImg.description}</p>
                        <button className="btn btn-warning">4.4/5</button>
                        <button className="btn btn-danger bt-buy" value="buy" onClick={(e) => this.buy_bt(currentImg)}>
                            Buy for ₹ {actualPrice}  <strike>₹ {currentImg.originalPrice}</strike> {currentImg.discountPercent}% Offer </button>
                    </span>
                </div>
                <div className="jumbotron delivery-tag">

                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state
})

// export default  () => (
//     <div>
//        <Router>
//             <Route component={productpage} />
//        </Router>
//    </div>
//  );

export default connect(mapStateToProps)(productpage)

