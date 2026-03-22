import { useState, useRef, useEffect } from 'react';
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




// The animated Logo Object 
export function Logo({size}) {

    // Logo Animation variables
    const time = 1000; const ratio = 1200;
    const colors = ['#818384', '#3a3a3c', '#b59f3b', '#538d4e'];
    const [index, setIndex] = useState(0);
    const [waiting, setWaiting] = useState(false);
    const [hovered, setHovered] = useState(false);
    
    // Animation values for the cards
    const [cardRotations, setCardRotations] = useState([0,180,0,180]);
    const [cardColorsIndex, setCardColorsIndex] = useState([0,1,2,3]);

    // Ref for async index
    const indexRef = useRef(index);
    indexRef.current = index;
    const HoverRef = useRef(hovered);
    HoverRef.current = hovered;
    const cardRotationsRef = useRef(cardRotations);
    cardRotationsRef.current = cardRotations;
    const cardColorsIndexRef = useRef(cardColorsIndex);
    cardColorsIndexRef.current = cardColorsIndex;

    // Handler for when the mouse enters the logo
    function OnEnter() {
        // Set hover variable to true
        setHovered(true);
        // If the logo is not waiting
        if(!waiting){
            // Start the animation cycle
            Animate();
        }
    }

    // Handler for when the mouse exits the logo
    function OnExit() {
        // Set hover variable to false
        setHovered(false);
    }

    // Cycling to the next card in the animation
    function Animate() {
        // Begin waiting
        setWaiting(true);
        // Animate the current indexed card
        UpdateRotation(indexRef.current, 180)
        UpdateColorIndex(indexRef.current, 1)
        // Increment to the next index
        setIndex(i => (i+1)%4)
        // Then wait to try and call Animate again
        setTimeout(() => {
            // If the mouse is hovering
            if(indexRef.current!=0 | HoverRef.current){
                // Animate the next card
                Animate();
            } // If mouse has left
            else{
                // End the animation
                setWaiting(false);
            }
            }, (time/4));
            
    }

    // Add value to array at index
    function UpdateRotation(id, val){
        // Itterate throught the array and only add to index
        const newArr = cardRotationsRef.current.map((c, i) => {
            if (i === id) {
                // Increment the clicked counter
                return c + val;
            } else {
                // The rest haven't changed
                return c;
            }
        });
        setCardRotations(newArr);
    }

    // Add value to array at index
    function UpdateColorIndex(id, val){
        // Itterate throught the array and only add to index
        const newArr = cardColorsIndexRef.current.map((c, i) => {
            if (i === id) {
                // Increment the clicked counter
                return c + val;
            } else {
                // The rest haven't changed
                return c;
            }
        });
        setCardColorsIndex(newArr);
    }

    // Get the color for a front card given an index
    function getFrontColor(cId){
        return colors[(cardColorsIndex[cId]%4)-(cardColorsIndex[cId]%2)];
    }
    // Get the color for a front card given an index
    function getBackColor(cId){
        return colors[1+(((cardColorsIndex[cId]-1)%4+4)%4)-((cardColorsIndex[cId]-1)%4+4)%2];
    }


    return (
        //Un
        <div className='logoBox' 
            onMouseEnter={() => OnEnter()}
            onMouseLeave={() => OnExit()}
            style={{width:size, height:size}}
            >
            <div className='logoCard' 
                style={{transform: 'rotateX('+cardRotations[0]+'deg)',
                    transition: 'transform '+(time/ratio)+'s'
                }}>
                <div className="logoCardFront" style={{ backgroundColor: getFrontColor(0), }}/>
                <div className="logoCardBack" style={{ backgroundColor: getBackColor(0), }}/>
            </div>
            <div className='logoCard' 
                style={{transform: 'rotateX('+cardRotations[1]+'deg)',
                    transition: 'transform '+(time/ratio)+'s'
                }}>
                <div className="logoCardFront" style={{ backgroundColor: getFrontColor(1), }}/>
                <div className="logoCardBack" style={{ backgroundColor: getBackColor(1), }}/>
            </div>
            <div className='logoCard' 
                style={{transform: 'rotateX('+cardRotations[3]+'deg)',
                    transition: 'transform '+(time/ratio)+'s'
                }}>
                <div className="logoCardFront" style={{ backgroundColor: getFrontColor(3), }}/>
                <div className="logoCardBack" style={{ backgroundColor: getBackColor(3), }}/>
            </div>
            <div className='logoCard' 
                style={{transform: 'rotateX('+cardRotations[2]+'deg)',
                    transition: 'transform '+(time/ratio)+'s'
                }}>
                <div className="logoCardFront" style={{ backgroundColor: getFrontColor(2), }}/>
                <div className="logoCardBack" style={{ backgroundColor: getBackColor(2), }}/>
            </div>
        </div>
    )
}