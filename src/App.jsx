import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./Page/Home"
import RootLayout from "./Page/RootLayout"
import Product from "./Page/Product"



let router = createBrowserRouter(createRoutesFromElements(

  <Route element={<RootLayout/>}>s
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
  </Route>

))


function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
