import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Career from './Pages/Career'
import CareerDetails from './Pages/CareerDetails'
import Pricing from './Pages/Pricing'
const App = () => {
  return (
    <div className=''>
      <Header></Header>
      {/*<Pricing></Pricing>*/}
      {/* <Career/> */}
      <CareerDetails/>
      <Footer></Footer>
    </div>
  )
}

export default App