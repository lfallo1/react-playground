import React, {useState} from 'react';
import CoinHeadsImg from '../../assets/coin-heads.jpg'
import CoinTailsImg from '../../assets/coin-tails.jpg'

function CoinFlipGame(){

    const [flips, setFlips] = useState([])
    const [lastFlip, setLastFlip] = useState({isHeads: true})

    const flipCoin = function(){
        const isHeads = (new Date().getTime() % 2) == 0;
        setFlips([...flips, {isHeads: isHeads}]);
        setLastFlip({isHeads: isHeads});
    }

    return (
        <div>
            <p>
                <img src={lastFlip.isHeads ? CoinHeadsImg : CoinTailsImg} width="100px" />
            </p>
            <p>
                <button onClick={() => flipCoin()}>Flip</button>
            </p>
            <p>
                <small>There have been {flips.length} total coin flips.  {flips.filter(f=>f.isHeads).length} heads and {flips.filter(f=>!f.isHeads).length} tails.</small>
            </p>

        </div>
    )
}

export default CoinFlipGame;