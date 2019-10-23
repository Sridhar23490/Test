import React, { Component } from 'react'
import { setTabs } from '../../Redux/actions/HeaderTabsActions'
import { setImgs } from '../../Redux/actions/HeaderTabsActions'
import '../Header/header.css'
import BuySmartLogo from '../Logo/Buy_Smart_Logo.jpg'
// import CartLogo from '../../Images/Logo-Cart.JPG'
import { connect } from 'react-redux'
import store from '../../Redux/store';
// import { bindActionCreators } from 'redux';

class header extends Component {
    constructor(props) {
        super(props)

        this.state = {

            tabs: ['Home', 'Product', 'Contact', 'About']

        }
    }

    openTab(e) {
        var currTab = e.target.value;
        if (currTab === 'Home') {
            store.dispatch(setImgs(''))
        }
        var tablinks = document.getElementsByClassName("btn-tab");
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }
        e.target.classList.add("active");
        store.dispatch(setTabs(currTab));
    }


    render() {
        return (
            <div className="navbar navbar-expand-sm bg-dark navbar-dark">
                <span className="img-size">
                    <img src={BuySmartLogo} alt="logo" />
                </span>
                <span className="txt-align">
                    <h2>{this.props.name}</h2>
                </span>
                <span>
                    <button className="btn btn-outline-warning bt-cart"><i className="fa fa-bars"></i>  Addtocart</button>
                </span>
                <span>
                    <button className="btn btn-success bt-login">Login</button>
                </span>
                <span>
                    <input className="search-box" type="text" placeholder="search" />
                </span>
                <span className="btn-group bt-group-align">
                    {this.state.tabs.map((tab) =>
                        <button className="btn btn-primary" value={tab} onClick={(e) => this.openTab(e)}>{tab}</button>
                    )}
                </span>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state
})

// function mapDispatchToProps(dispatch) {
//     const actions = Object.assign(setTabs);
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         Tabs: () => dispatch(setTabs())
//     }
// }

//export default header;
export default connect(mapStateToProps)(header);
