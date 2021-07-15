import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        { id: "OSjPYgKvopmhSyNOrV" },
        { id: "kcTa47vsvcqsXAWi2B" },
        { id: "KDKQ0o7fzr4lx3Tg0H" },
        { id: "VdhjKY8AYCopN5KOL5" },
        { id: "W0cl04gXJLLEG7cRw4" },
        { id: "Q79No7wEaClqQMTj3c" },
        { id: "S8lG8KjSLx7UuzUdjg" }, ],
      selectedGifId: "OSjPYgKvopmhSyNOrV"
    };
  }

  search = (query) => {
    giphy('NBmzDWx8UCzOzSScUpdLqazCM2KCpoy5').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({gifs: res.data});
    });
  }

  displaySelectedGif = (id) => {
    this.setState({ selectedGifId: id });
  }

  render() {

    return(
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} displaySelectedGif={this.displaySelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
