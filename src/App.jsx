import { useState } from 'react';
import './assets/musicPL_design.css';
import Sza from './assets/Sza.jpg';

const szaPlaylist = [
  { id: 1, title: 'Kill Bill', duration: '2:33' },
  { id: 2, title: 'Snooze', duration: '3:21' },
  { id: 3, title: 'Good Days', duration: '4:39' },
  { id: 4, title: 'Saturn', duration: '3:06' },
  { id: 5, title: 'Shirt', duration: '3:01' },
];

function App() {
  const [currentSong, setCurrentSong] = useState(szaPlaylist[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const selectSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <main className="playlist-card">
      
      <header className="playlist-header">
        <img src={Sza} alt="SZA" className="artist-img" />
        <div>
          <span className="badge">Mayi's Playlist</span>
          <h1>SZA</h1>
          <p>My top 5 favorite songs By Sza</p>
        </div>
      </header>


      {/* Song List */}
      <ul className="song-list">
        {szaPlaylist.map((song, index) => (
          <li
            key={song.id}
            className={`song-item ${currentSong.id === song.id ? 'active' : ''}`}
            onClick={() => selectSong(song)}
          >
            <span className="song-number">
              {currentSong.id === song.id && isPlaying ? '🎵' : index + 1}
            </span>
            <div className="song-info">
              <strong>{song.title}</strong>
              <small>{song.album}</small>
            </div>
            <span className="song-duration">{song.duration}</span>
          </li>
        ))}
      </ul>

      {/* Player Bar */}
      <footer className="player-bar">
        <div>
          <p className="np-title">{currentSong.title}</p>
          <p className="np-artist">SZA • {currentSong.album}</p>
        </div>
        <button className="btn-player-toggle" onClick={togglePlay}>
          {isPlaying ? '⏸' : '▶'}
        </button>
      </footer>
    </main>
  );
}

export default App;