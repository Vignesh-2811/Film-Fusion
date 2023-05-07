import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';

function NotFound() {
  return (
    <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img
        src={require('../images/404.png')}
        alt=''
        className='2-full h-96 object-contain'
      />
      <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
      <p className='font-medium text-border italic leading-6'>
        Oops! We can't find this page.
      </p>
      <Link
        to='/'
        className='bg-subMain transitions text-white flex-rows gap-4 font-medium py-3 hover:text-main px-4 rounded-md'
      >
        <BiHomeAlt /> Back to homepage
      </Link>
    </div>
  );
}

export default NotFound;
