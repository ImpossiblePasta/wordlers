import { useState } from 'react';
import './objects.css';

export function CardWordle({letter}) {

    const colors = ['#3a3a3c', '#538d4e', '#b59f3b'];
    const [color, setColor] = useState('#538d4e');
    const [flipped, setFlipped] = useState(false);
    const [waiting, setWait] = useState(false);

    function flip() {
        // When the object is moused over, if the object is flipped if unflipped
        if(!flipped && !waiting){
            setFlipped(true)
            // Start the wait timer
            setWait(true);
            setTimeout(() => {
                setWait(false);
            }, 1400);
            // then change the color to a random one
            setColor(colors[ Math.floor(Math.random() * colors.length) ]);
            // Then set a timer to unflip
            setTimeout(() => {
                setFlipped(false);
            }, 1000)
        }
    }

  return (
    <div className={flipped ? "card flipped" : "card"} 
        onMouseEnter={() => flip()} >
        <div className="over-text">{letter}</div>
        <div className="card-inner">
            <div className="card-front"></div>
            <div className="card-back" style={{ backgroundColor: color, }}></div>
        </div>
    </div>
  );
}