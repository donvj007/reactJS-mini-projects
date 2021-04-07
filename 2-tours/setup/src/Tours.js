import React from 'react';
import Tour from './Tour';
const Tours = ({xyz,removeTour}) => {
  return (
    <section>
      <div className='title'>
        <h2>ours tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {xyz.map((tour)=>{
          return <Tour key={tour.id}{...tour} removeTour={removeTour}/>
        })}
      </div>
    </section>
    );
};

export default Tours;
