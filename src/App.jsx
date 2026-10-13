import './assets/musicPL_design.css';
import FavArtist from './assets/favArtist.png';

const playlist = [
  { title: "Pare Ko", artist: "Parokya Ni Edgar", duration: "05.15" },
  { title: "Kill Bill", artist: "Sza", duration: "04.15" },
  { title: "Best Part", artist: "Daniel Caesar", duration: "03.00" },
  { title: "Risk It All", artist: "Bruno Mars", duration: "05.10" },
  { title: "Pangarap Lang Kita", artist: "Parokya Ni Edgar", duration: "04.15" }
];

export default function App() {
  return (
    <div className="player">
      <h2>MAYI’S FAVORITE ARTIST</h2>

      <img src={FavArtist} alt="Album Art" className="cover" />

      <div className="now-playing">
        <div className="info">
          <h3>{playlist[0].title}</h3>
          <p>{playlist[0].artist}</p>
        </div>

        <div className="slider">
          <div className="fill" />
        </div>

        <div className="buttons">
          <button>⏮</button>
          <button className="play-btn">▶</button>
          <button>⏭</button>
        </div>
      </div>

      <hr />

      <div className="list">
        <div className="song">
          <div className="song-left">
          
            <div>
              <h4>Pare Ko</h4>
              <p>Parokya Ni Edgar</p>
            </div>
          </div>
          <span>05:15</span>
        </div>

        <div className="song">
          <div className="song-left">
            
            <div>
              <h4>Kill Bill</h4>
              <p>Sza</p>
            </div>
          </div>
          <span>04:15</span>
        </div>

        <div className="song">
          <div className="song-left">
           
            <div>
              <h4>Best Part</h4>
              <p>Daniel Caesar</p>
            </div>
          </div>
          <span>03:00</span>
        </div>

        <div className="song">
          <div className="song-left">
           
            <div>
              <h4>Risk It All</h4>
              <p>Bruno Mars</p>
            </div>
          </div>
          <span>05:10</span>
        </div>

        <div className="song">
          <div className="song-left">
            
            <div>
              <h4>Pangarap Lang Kita</h4>
              <p>Parokya Ni Edgar</p>
            </div>
          </div>
          <span>04:15</span>
        </div>
      </div>
    </div>

  );
}