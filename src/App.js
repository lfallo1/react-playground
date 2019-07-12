import React from 'react';
import './App.css';
import RandomNumberGenerator from "./components/RandomNumberGenerator";
import DiceGame from './components/DiceGame/DiceGame'
import IconsList from "./components/Icons/IconsList";
import CoinFlipGame from './components/CoinFlip/CoinFlipGame'
import ColoredBoxes from "./components/ColoredBoxes/ColoredBoxes";
import LightsOutGame from "./components/LightOutGame/LightsOutGame";

function App() {
  return (
    <div className="App">
        <LightsOutGame/>
        {/*<ColoredBoxes/>*/}
        {/*<CoinFlipGame/>*/}
        {/*<IconsList/>*/}
      {/*<RandomNumberGenerator/>*/}
      {/*<DiceGame />*/}
    </div>
  );
}

export default App;
