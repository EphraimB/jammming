import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.state.searchResults = {}
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        { /* Add a SearchBar component */ }
          <div className="App-playlist">
            { /* Add a SearchResults component */ }
            { /* Add a Playlist component */ }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
