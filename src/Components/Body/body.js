import React, { Component } from 'react'
import '../Body/body.css'
import { connect } from 'react-redux'
// import store from '../../Redux/store';
import Home from './Home/home'
import Product from './Product/product'
import Contact from './Contact/contact'
import About from './About/about'

class body extends Component {

    render() {
        var activeTab = this.props.tabReducer.activeTab;
        // console.log(activeTab)
        return (
            <div className="section-body">
                {(activeTab === 'Home') ? <Home />
                    : (activeTab === 'Product') ? <Product />
                        : (activeTab === 'Contact') ? <Contact />
                            : <About />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(body)
// export default body
