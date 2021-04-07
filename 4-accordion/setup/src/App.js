import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [quetions,setQuetions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>quetions and answer about login</h3>
        <section className='info'>
          {
            quetions.map((qn) => {
              return ( <SingleQuestion key={qn.id} {...qn} />)
            })
          }
        </section>
      </div>
    </main>
  )
  
  }
export default App;
