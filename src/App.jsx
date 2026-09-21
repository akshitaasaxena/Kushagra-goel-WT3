import { useState } from 'react'
import ClubCard from "./Component/ClubCard";
import ClubData from "./Data/data";
import './App.css';

function App() {
  const [Clubs, setClub] = useState(ClubData);
  function hasjoined(id) {
    const newjoiner = Clubs.map(() => {
      if (Clubs.id == id) {
        Clubs.joined = !Clubs.joined;
      }
      return Clubs;

                           

    })
    setClub(newjoiner);

  }
  let totalno = Clubs.filter(
    (Clubs) => { Clubs.joined }
  ).length;

  return (
    <div>

      <h1>College Club Dashboard</h1>
      <h2>total number of clubs : {totalno}</h2>

      {
        Clubs.map((Clubs) => {


     


          <ClubCard>

          </ClubCard>

        }
        )
      }



    </div>

  )
}

export default App;
