import React, { useState } from 'react';

const DataNeuron = () => {

  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);


  return (
    <div className='bg-slate-800 h-screen'>
      <div style={{ width, height }} className='bg-slate-600'>
        This is a resizable component.
      </div>
      <div style={{ width, height }} className='bg-slate-400'>
        This is a resizable component.
      </div>
      <div style={{ width, height }} className='bg-slate-200'>
        This is a resizable component.
      </div>
    </div>
  )
}

export default DataNeuron
