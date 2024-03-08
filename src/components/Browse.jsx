import React from 'react';
import Header from './Header';
import useLatestMovie from '../Hooks/useLatestMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
  useLatestMovie()
  return (
    <div className='overflow-hidden'>
      <Header /> 
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
