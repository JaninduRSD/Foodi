import React from 'react'
import Banner from '../../components/Banner';
import { Categories } from './Categories';
import  SpecialDishes  from './SpecialDishes';
import Testamonials from './Testamonial';
import OurServices from './OurServices'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testamonials/>
      <OurServices/>
    </div>
  )
}
export default Home;