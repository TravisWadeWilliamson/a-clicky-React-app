import React, { Component } from 'react';
import Navbar from "./components/Navbar/nav";
import Card from './components/Card/card';
import './App.css';
import images from './components/Card/cards.json';


class App extends Component {

  state = {
    currentScore: 0,
    highScore: 0,
    isMatch: false,
    images: []
  }
  // Calls the function when page is loaded
  componentDidMount = () => {
    this.setState({ images: images });
    // this.setState({ currentScore: currentScore });
    // this.setState({highScore: highScore});
  }


  clickHandler = async (event) => {
    // Stores the id of the clicked image
    const { id } = event.target;
    //loops through the array of images and stores the clicked images in a new array
    const newImages = await this.state.images.map(image => {

      //Finds the clicked image and checks it against the id to see if it's been clicked twice
      if (image.id == id) {

        // Checks to see if clicked is true or false
        if (image.isClicked === false) {
          // The first time the image is clicked we set isClicked to true 
          // this.setState.currentScore++;
          // console.log(currentScore);
          return {
            id: image.id,
            img: image.img,
            isClicked: true
          }
          // If the image has been clicked isClicked is true SSSOOO if we click the same image again we set isMatch to true 
        } if (image.isClicked === true) {
          alert('you clicked it')
          // if clicked the second time sets the isMatch state to true 
          this.setState({ isMatch: true });
        }
        // If the image is not clicked the original state persists
      } else {
        return image
      }
    });

    console.table(newImages)
    //CHECK IS MATCH THAN RESET THE ARRAY
    if (this.state.isMatch) {
      this.setState({
        images: images,
        isMatch: false
      })
    } else {
      this.setState({
        images: newImages
      });
    }
  }

  render() {

    return (
      <div>
        <Navbar />
        <div className="container">
          <Card clickHandler={this.clickHandler} />
        </div>
      </div>
    );
  }
}

export default App;
