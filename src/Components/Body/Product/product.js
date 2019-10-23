import React, { Component } from 'react'
import { connect } from 'react-redux'

class product extends Component {
    render() {
        var productImage = this.props.productReducer.activeProduct;
        return (
            <div>
                <div class="row">
                    <div class="col-sm-3">
                        {productImage.map((image) =>
                            <span>
                                <span>
                                    <img src={image.img} alt="Sridhar" />
                                </span>
                                <span>
                                    <h1>{image.name}</h1>
                                </span>
                                <span>
                                    <h4>{image.price}</h4>
                                </span>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(product)
