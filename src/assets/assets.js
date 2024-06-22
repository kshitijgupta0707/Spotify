import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.jpg";
import img10 from "./img10.jpg";
import img11 from "./img11.jpg";
import img12 from "./img12.jpg";
import img13 from "./img13.jpg";
import img14 from "./img14.jpg";
import img15 from "./img15.jpg";
import img16 from "./img16.jpg";
import song1 from "./song1.mp3";
import song2 from "./song2.mp3";
import song3 from "./song3.mp3";

import rsong1 from "./romatic/rsong1.mp3";
import rsong2 from "./romatic/rsong2.mp3";
import rsong3 from "./romatic/rsong3.mp3";
import rrsong1 from "./romatic/rrsong1.jpg";
import rrsong2 from "./romatic/rrsong2.jpg";
import rrsong3 from "./romatic/rrsong3.jpg";

import govindbolo from "./spritual/govindbolo.mp3";
import kitnapyarahain from "./spritual/kitnapyarahain.mp3";
import sajadogharko from "./spritual/sajadogharko.mp3";
import _govindbolo from "./spritual/_govindbolo.jpg";
import _kitnapyarahain from "./spritual/_kitnapyarahain.jpg";
import _sajadogharko from "./spritual/_sajadogharko.jpg";

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
  {
    id: 0,
    name: "Top 50 Global",
    image: img8,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#2a4365",
    songs: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 1,
    name: "Top 50 India",
    image: img9,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#22543d",
    songs: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 2,
    name: "Trending India",
    image: img10,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#742a2a",
    songs: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 3,
    name: "Trending Global",
    image: img16,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#44337a",
    songs: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 4,
    name: "Mega Hits,",
    image: img11,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#234e52",
    songs: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 5,
    name: "Happy Favorites",
    image: img15,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#744210",
    songs: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 6,
    name: "Hare Krishna Bhajans",
    image: _govindbolo,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#744210",
    songs: [11, 12, 13],
  },
  {
    id: 7,
    name: "Romantic songs",
    image: rrsong3,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#744210",
    songs: [8, 9, 10],
  },
];

export const songsData = [
  {
    id: 0,
    name: "Song One",
    image: img1,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00",
  },
  {
    id: 1,
    name: "Song Two",
    image: img2,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:20",
  },
  {
    id: 2,
    name: "Song Three",
    image: img3,
    file: song3,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:32",
  },
  {
    id: 3,
    name: "Song Four",
    image: img4,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:50",
  },
  {
    id: 4,
    name: "Song Five",
    image: img5,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:10",
  },
  {
    id: 5,
    name: "Song Six",
    image: img14,
    file: song3,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:45",
  },
  {
    id: 6,
    name: "Song Seven",
    image: img7,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:18",
  },
  {
    id: 7,
    name: "Song Eight",
    image: img12,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:35",
  },
  {
    id: 8,
    name: "Suniyan suniyan",
    image: rrsong1,
    file: rsong1,
    desc: "raatein de vich tuuu",
    duration: "3:17",
  },
  {
    id: 9,
    name: "Dekha tenu",
    image: rrsong2,
    file: rsong2,
    desc: "Dekha tune pehli pehli brr veein",
    duration: "4:41",
  },
  {
    id: 10,
    name: "Soulmate",
    image: rrsong3,
    file: rsong3,
    desc: "din ko raat khu",
    duration: "3:33",
  },
  
  {
    id: 11,
    name: "Saja-do-ghar-ko-gulshan-sa",
    image: _sajadogharko,
    file: sajadogharko,
    desc: "Hare krishna",
    duration: "8:43",
  },
  
  {
    id: 12,
    name: "kitna pyaara hain",
    image: _kitnapyarahain,
    file: kitnapyarahain,
    desc: "Hare Krishna",
    duration: "8:43",
  }
  ,
  {
    id: 13,
    name: "Govind-bolo",
    image: _govindbolo,
    file: govindbolo,
    desc: "Hare Krishna",
    duration: "2:33",
  }
];
