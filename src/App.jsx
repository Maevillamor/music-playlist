import { useState } from 'react';
import './assets/musicPL_design.css';
import FavArtist from './assets/favArtist.png';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState({ title: "Pare Ko", artist: "Parokya Ni Edgar" });

  const playlist = [
    { title: "Kill Bill", artist: "Sza", duration: "04.15" },
    { title: "Best Part", artist: "Daniel Caesar", duration: "03.00" },
    { title: "Risk It All", artist: "Bruno Mars", duration: "05.10" },
    { title: "Pangarap Lang Kita", artist: "Parokya Ni Edgar", duration: "04.15" }
  ];

  return (
    <div className="player">
      <h2>MAYI’S FAVORITE ARTIST</h2>

      <img src={FavArtist} alt="Album Art" className="cover" />

      <div className="now-playing">
        <div className="info">
          <h3>{current.title}</h3>
          <p>{current.artist}</p>
        </div>
        <div className="slider"><div className="fill"></div></div>
        <div className="buttons">
          <button>⏮</button>
          <button onClick={() => setIsPlaying(!isPlaying)} className="play-btn">
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button>⏭</button>
        </div>
      </div>

      <hr />

      <div className="list">
        {playlist.map((song, i) => (
          <div key={i} className="song" onClick={() => { setCurrent(song); setIsPlaying(true); }}>
            <div className="song-left">
              <span>▶</span>
              <div>
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
              </div>
            </div>
            <span>{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
