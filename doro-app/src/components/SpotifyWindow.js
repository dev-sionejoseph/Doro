import * as $ from 'jquery';
import React, { Component } from "react";
import hash from "./hash";
import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          token: "",
          deviceId: "",
          loggedIn: false,
          error: "",
          trackName: "Track Name",
          artistName: "Artist Name",
          albumName: "Album Name",
          playing: false,
          position: 0,
          duration: 0,
          item: null
        };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    }

    getCurrentlyPlaying(token) {
      
      $.ajax({
        url: "https://api.spotify.com/v1/me/player",
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader("Authorization", "Bearer " + `${process.env.REACT_APP_APIKEY_SPOTIFY}`);
        },
        success: (data) => {
          this.setState({
            item: data.item,
          });
        }
      });
    }

  }
  