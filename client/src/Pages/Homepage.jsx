import React from 'react'
import Hero from '../Hero/Hero'
import Popular from'../Popular/Popular'
import Offers from '../Offers/Offers'
import NewCollections from '../New_Collections/NewCollections'
import NewsLetter from '../NewsLetter/NewsLetter'

 const Homepage = () => {
  return (
    <div><Hero/>
    <Popular />
    <Offers />
    <NewCollections/>
    <NewsLetter/>
    </div>
    
  )
}

export default Homepage;