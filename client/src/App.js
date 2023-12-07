import React, { Component } from "react";
import AnimeList from './AnimeList';
import AnimeDetails from './AnimeDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      animeId: null,
      animeData: [],
    };
  }

  // Fetch anime data from the Express API
  fetchAnimeData = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/anime/list');
      const data = await response.json();

      this.setState({ animeData: data });
    } catch (error) {
      console.error('Error fetching anime data:', error);
    }
  };

  // Function to navigate to the Anime List page
  goToAnimeList = () => {
    this.setState({ currentPage: 'animeList', animeId: null });
  }

  // Function to navigate to the Anime Details page
  goToAnimeDetails = (animeId) => {
    this.setState({ currentPage: 'animeDetails', animeId });
  }

  componentDidMount() {
    // Fetch anime data when the component mounts
    this.fetchAnimeData();
  }

  renderAnimeList() {
    const { animeData } = this.state;

    return (
      <div>
        <h2>Anime List</h2>
        <div style={{ display: 'flex' }}>
          {animeData.map(anime => (
            <div key={anime.id} style={{ margin: '10px', textAlign: 'center' }}>
              <img
                src={anime.photo}
                alt={anime.title}
                style={{ width: '150px', height: '200px', objectFit: 'cover' }}
                onClick={() => this.goToAnimeDetails(anime.id)}
              />
              <p>{anime.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  renderPage() {
    const { currentPage, animeId } = this.state;

    switch (currentPage) {
      case 'animeList':
        return <AnimeList onAnimeClick={this.goToAnimeDetails} />;
      case 'animeDetails':
        return <AnimeDetails animeId={animeId} />;
      default:
        return this.renderAnimeList();
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderPage()}
        <button onClick={this.goToAnimeList}>Go to Anime List</button>
      </div>
    );
  }
}

export default App;
