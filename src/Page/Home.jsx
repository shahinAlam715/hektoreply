import React from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import NewArrival from '../Component/NewArrival'
import Latestproduct from '../Component/Latestproduct'
import SpoxOffer from '../Component/SpoxOffer'
import UniqFeauters from '../Component/UniqFeauters'
import TreandingProduct from '../Component/TreandingProduct'
import DiscountIteam from '../Component/DiscountIteam'
import TopCategory from '../Component/TopCategory'
import LatestUpdate from '../Component/LatestUpdate'
import LatestBlog from '../Component/LatestBlog'
import Fotter from '../Component/Fotter'

const Home = () => {
  return (
    <>
     <Banner/>
     <NewArrival/>
     <Latestproduct/>
     <SpoxOffer/>
     <UniqFeauters/>
     <TreandingProduct/>
     <DiscountIteam/>
     <TopCategory/>
     <LatestUpdate/>
     <LatestBlog/>
    </>
  )
}

export default Home