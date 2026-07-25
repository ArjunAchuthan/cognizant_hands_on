import ListofPlayers from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";

import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListofIndianPlayers from "./ListofIndianPlayers";

import {
  IndianPlayers,
  T20Players,
  RanjiTrophyPlayers
} from "./IndianPlayers";

function App() {

  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 }
  ];

  const IndianTeam = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Rohit",
    "Yuvraj",
    "Raina"
  ];

  const oddTeam = [
    IndianTeam[0],
    IndianTeam[2],
    IndianTeam[4]
  ];

  const evenTeam = [
    IndianTeam[1],
    IndianTeam[3],
    IndianTeam[5]
  ];

  // Change this to false to see the second output
  const flag = true;

  if (flag) {

    return (
      <div>

        <h1>List of Players</h1>
        <ListofPlayers players={players} />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />

      </div>
    );

  }

  return (

    <div>

      <h1>Indian Team</h1>

      <h2>Odd Players</h2>
      <OddPlayers players={oddTeam} />

      <hr />

      <h2>Even Players</h2>
      <EvenPlayers players={evenTeam} />

      <hr />

      <h2>List of Indian Players Merged</h2>
      <ListofIndianPlayers IndianPlayers={IndianPlayers} />

    </div>

  );

}

export default App;