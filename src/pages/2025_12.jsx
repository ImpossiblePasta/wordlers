import './2025.css'
import { useEffect, useState } from 'react';

import { Header } from '../components/pagebody';
import { LineGraph } from '../components/graphs';
import { ExpandingTable } from '../components/tables';

import { scoreData, keys } from '../assets/2025/score';


function December2025() {


  const getHash = () => typeof window !== 'undefined' ? window.location.hash.replace("#", "") : "";
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const handleHashChange = () => setHash(getHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return(
    <div className='pageBox'> 
      <Header title='December 2025' hash={hash}
        lastMonth={"2025nov"} nextMonth={"2026jan"} 
        lastActive={false} nextActive={false} />

      <div className='mainPage'>

        {(hash!='award' && hash!='data') && 
        <div className='div1'>
            <h2>DECEMEBER 2025</h2>
            <LineGraph scoreData={scoreData} keys={keys}/>
        </div> }

        { hash == 'award' &&
          <div className='div2'>
            <h2>DIV 2</h2>
          </div>
        }
        
        { hash == 'data' &&
          <div className='dataBox'>
              <ExpandingTable date='DECEMBER 2025 DATA'/>
          </div>
        }

        
      </div>
        
      
    </div>
  );
}

export default December2025;