import React, { Component } from 'react'
import Homepage_img from '../../../Images/Img_HomePage.png'
import '../Home/home.css'
import Carousel from './Carousel/carousel'
import { connect } from 'react-redux'
import Productpage from './ProductPage/productpage'
// import Addtocart from '../../Header/AddtoCart/addtocart'
// import { Router, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

class home extends Component {
    render() {
        var activeImg = this.props.imgReducer.activeImg;
        // console.log('Image', activeImg)
        return (
            <div>
                {
                    (activeImg === '') ?
                        <div>
                            <img id="Img_Size" src={Homepage_img} alt="HomePage_Image" />
                            <Carousel />
                        </div> :
                        <Productpage productname={activeImg} />
                }
                {/* <Router history={createBrowserHistory}>
                    <Route path="/addtocart" component={Addtocart} />
                </Router> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(home)
