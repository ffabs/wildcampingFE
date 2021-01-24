import React, { Component } from 'react';
import './CampingImages.css';

class CampingImages extends Component {

    constructor (props) {
        super(props);   
        this.state = {
            mainImage: this.props.pic1,
            pic1Css: "camping-image-preview camping-image-preview-selected",
            pic2Css: "camping-image-preview",
            pic3Css: "camping-image-preview",
            pic4Css: "camping-image-preview"
        };
      }

    showPic1 = event => {
        this.setState({
            mainImage: this.props.pic1,
            pic1Css: "camping-image-preview camping-image-preview-selected",
            pic2Css: "camping-image-preview",
            pic3Css: "camping-image-preview",
            pic4Css: "camping-image-preview"
        });
    }

    showPic2 = event => {
        this.setState({
            mainImage: this.props.pic2,
            pic1Css: "camping-image-preview",
            pic2Css: "camping-image-preview camping-image-preview-selected",
            pic3Css: "camping-image-preview",
            pic4Css: "camping-image-preview"
        });
    }

    showPic3 = event => {
        this.setState({
            mainImage: this.props.pic3,
            pic1Css: "camping-image-preview",
            pic2Css: "camping-image-preview",
            pic3Css: "camping-image-preview camping-image-preview-selected",
            pic4Css: "camping-image-preview"
        });
    }

    showPic4 = event => {
        this.setState({
            mainImage: this.props.pic4,
            pic1Css: "camping-image-preview",
            pic2Css: "camping-image-preview",
            pic3Css: "camping-image-preview",
            pic4Css: "camping-image-preview camping-image-preview-selected"
        });
    }



    render() {

        let pic1 = this.props.pic1;
        let pic2 = this.props.pic2;
        let pic3 = this.props.pic3;
        let pic4 = this.props.pic4;
        
        return (
            <div className="camping-images">
              <div className="camping-images-preview">
                { pic1 &&
                <button 
                    className="camping-image-preview-button"
                    type="button" 
                    onClick={this.showPic1}>
                  <img src={pic1} className={this.state.pic1Css} alt="wild-camping" />
                </button>
                }
                { pic2 &&
                <button 
                    className="camping-image-preview-button"
                    type="button" 
                    onClick={this.showPic2}>
                  <img src={pic2} className={this.state.pic2Css} alt="wild-camping" />
                </button>
                }
                { pic3 &&
                  <button 
                    className="camping-image-preview-button"
                    type="button" 
                    onClick={this.showPic3}>
                    <img src={pic3} className={this.state.pic3Css} alt="wild-camping" />
                  </button>
                }
                { pic4 &&
                  <button 
                    className="camping-image-preview-button"
                    type="button" 
                    onClick={this.showPic4}>
                    <img src={pic4} className={this.state.pic4Css} alt="wild-camping" />
                  </button>
                }
              </div>
              <img src={this.state.mainImage} className="camping-image" alt="wild-camping" />
            </div>
        )

    }

}


export default CampingImages;