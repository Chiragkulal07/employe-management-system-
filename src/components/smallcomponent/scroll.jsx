import React from 'react';

const Scroll = () => {
  return (
    <div id="tasklist" className=' flex flex-col h-80 overflow-y-scroll w-full p-4 gap-2 scrollbar-hide snap-y snap-mandatory'>
      <div className=' snap-start h-[50px] p-3 shrink-0 bg-yellow-500'>Scrollable content goes here</div>
      <div className=' snap-start h-[50px] p-3 shrink-0 bg-yellow-500'>Scrollable content goes here</div>
      <div className=' snap-start h-[50px] p-3 shrink-0 bg-yellow-500'>Scrollable content goes here</div>
      <div className=' snap-start h-[50px] p-3 shrink-0 bg-yellow-500'>Scrollable content goes here</div>
      <div className=' snap-start h-[50px] p-3 shrink-0 bg-yellow-500'>Scrollable content goes here</div>
    </div>
  );
};

export default Scroll;
