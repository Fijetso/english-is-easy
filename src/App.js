import logo from "./logo.svg";
import "./App.css";
import Song from "./Song/Song";
import { React, Component } from "react";

export default class App extends Component {
  state = {
    songs: [
      {
        title: "Happy New Year",
        author: "ABBA",
        lyrics: "No more champion and the fire-works are through...",
      },
      {
        title: "Nang co con xuan",
        author: "Huong Tram",
        lyrics: "Mua xuan oi ta nghe mua xuan hat ben kia troi...",
      },
      {
        title: "Tinh yeu mau nang",
        author: "Doan Trang",
        lyrics: "Goi ten cua anh la nang de em duoc lam may trang...",
      },
    ],
  };

  render() {
    var songs = this.state.songs;
    return (
      <div className="App">
        <Song title={songs[0].title} author={songs[0].author}>
          {songs[0].lyrics}
        </Song>
        <Song title={songs[1].title} author={songs[1].author}>
          {songs[1].lyrics}
        </Song>
        <Song title={songs[2].title} author={songs[2].author}>
          {songs[2].lyrics}
        </Song>
      </div>
    );
  }
}
