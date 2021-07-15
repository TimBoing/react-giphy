import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    console.log(this.props.id);
    this.props.displaySelectedGif(this.props.id);
  }

  render() {

    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;

    return(
      <img src={src} className="gif" alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
