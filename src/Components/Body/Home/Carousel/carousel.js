import React from 'react';
import arrowRight from '../../../../Images/Right_Arrow.png';
import arrowLeft from '../../../../Images/Left_Arrow.png';
import '../Carousel/carousel.css'
import { Image } from '../../../../Images/image'
import store from '../../../../Redux/store'
import { connect } from 'react-redux'
import { setImgs } from '../../../../Redux/actions/HeaderTabsActions'

class Videos extends React.Component {
    constructor() {
        super();
        this.state = {
            // holding the current index for the image that has to be rendered at each time on the screen 
            currentImageIndex: 0,
            // array of the source links to the images, simple placeholders for now
            images: Image,
            arrowNext: arrowRight,
            arrowPrev: arrowLeft
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    prevSlide() {
        // find the index of the last image in the array
        const lastIndex = this.state.images.length - 1;
        // check if we need to start over from the last index again
        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
        // assign the logical index to currentImageIndex that will use in render method
        this.setState({
            currentImageIndex: index
        })
    }

    nextSlide() {
        // find the index of the last image in the array
        const lastIndex = this.state.images.length - 1;
        // check if we need to start over from the first index
        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
        // assign the logical index to currentImageIndex that will use in render method
        this.setState({
            currentImageIndex: index
        });
    }

    openImage(e) {
        var currImg = e.target.name;
        store.dispatch(setImgs(currImg));
    }

    render() {
        const index = this.state.currentImageIndex;
        // create a new array with 5 videos from the source images
        let firstFiveVideo = this.state.images.slice(index, index + 5);
        // check the length of the new array (it’s less than 5 when index is near the end of the array)
        if (firstFiveVideo.length < 5) {
            // if the firstFiveVideo's length is lower than 5 images than append missing images from the beginning of the original array 
            firstFiveVideo = firstFiveVideo.concat(this.state.images.slice(0, 5 - firstFiveVideo.length))
        }
        return (
            <div className="carousel-move">
                <img id="img-leftarrow" src={this.state.arrowPrev} onClick={this.prevSlide} alt="leftarrow" />
                {firstFiveVideo.map((image, index) =>
                    <img key={index} src={image.img} name={image.name} onClick={(e) => this.openImage(e)} alt="Sridhar" />
                )}
                <img id="img-rightarrow" src={this.state.arrowNext} onClick={this.nextSlide} alt="rightarrow" />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(Videos)