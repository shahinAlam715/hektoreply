import Banner from "./Component/Banner"
import DiscountIteam from "./Component/DiscountIteam"
import Fotter from "./Component/Fotter"
import Header from "./Component/Header"
import LatestBlog from "./Component/LatestBlog"
import Latestproduct from "./Component/Latestproduct"
import LatestUpdate from "./Component/LatestUpdate"
import Navbar from "./Component/Navbar"
import NewArrival from "./Component/NewArrival"
import SpoxOffer from "./Component/SpoxOffer"
import TopCategory from "./Component/TopCategory"
import TreandingProduct from "./Component/TreandingProduct"
import UniqFeauters from "./Component/UniqFeauters"


function App() {


  return (
    <>
     <Header/>
     <Navbar/>
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
     <Fotter/>
    </>
  )
}

export default App
