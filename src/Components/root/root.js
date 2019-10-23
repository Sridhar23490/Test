
import React, { Component } from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Body from '../Body/body'

class root extends Component {
    render() {
        return (
        <div>
            <Header name="Welcome to BUY SMART" />
            <Body />
            <Footer />
          </div>
        )
    }
}

export default root
