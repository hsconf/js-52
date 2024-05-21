import './App.css';
import Card from "./Components/Cards/card.tsx";
import {useState} from "react";

const App = () => {
    const [suit, setSuit] = useState<suit[]>(['♦','♥','♣','♠']);
    console.log(suit);
    return (
      <>
        <div className="playingCards faceImages">
          <Card rank={'5'} suit={'clubs'} suitType={suit[1]}></Card>
        </div>
      </>
  );
};

export default App;
