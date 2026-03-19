import React from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import Fotter from '../Component/Fotter'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet/>
    <Fotter/>
    </>
  )
}

export default RootLayout