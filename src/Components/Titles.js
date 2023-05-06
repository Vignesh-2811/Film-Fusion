import React from 'react';

function Titles({ title, Icon }) {
  return (
    <div>
      <div className='w-full flex sm:gap gap-4 items-center'>
        <Icon className='sm:w-6 sm:h-6 w-4 h-4 text-subMain' />
        <h2 className='sm:text-xl font-bold text-lg'>{title}</h2>
      </div>
    </div>
  );
}

export default Titles;
