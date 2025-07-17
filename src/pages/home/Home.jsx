import React from 'react'
import Banner from '../../components/Banner';
import { Categories } from './Categories';
import  SpecialDishes  from './SpecialDishes';
import Testamonials from './Testamonial';

export const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testamonials/>
    </div>
  )
}
export default Home;