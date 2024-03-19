import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Pro from './components/Pro'
import Drugs from './components/Drugs'
import Card from './components/Card'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Testimonial from './components/Testimonial'



const App = () => {

  const image1 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/17/246787/1.jpg?7984" 
  const image2 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/66/1582871/1.jpg?8308'
  const image3 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/30/0033821/1.jpg?7144"
  const image4 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/11/8937241/1.jpg?5928"
  const image5 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/12/9560652/1.jpg?6257"
  return (

    <div>
    
     <BrowserRouter>
     <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/project" element = {<Project/>}/>
      <Route path="/testimonial" element = {<Testimonial/>}/>
     </Routes>
     </BrowserRouter> 
      
      
      {/* <Pro name="omoh" job="developer" worth="millionaire"/>
      <Pro name="toheed" job="hair stylist" worth="billionaire" />
      <Pro  name="idris" job="marketer" worth="trillionaire" />
      <Pro />
      <Pro /> */}

      {/* <Drugs name="toheed" job="marketer" wage={500000}/>
      <Drugs name="victor" job="data science" wage={500000}/>
      <Drugs name="omoh" job="doctor" wage={500000}/>
      <Drugs name="nikky" job="nurse" wage={500000}/>
      <Drugs name="femi" job="manager" wage={500000}/>
      <Drugs name="Teeboy" job="Accountant" wage={500000}/>
      <Drugs name="david" job="developer" wage={500000}/> */}

      <div className='d-flex flex-wrap gap-4'>
      <Card image={image1} name="Computer mouse" description="durable computer mouse for laptop" price={5000}/>
      <Card image={image2} name="Cooking gas" description="durable cooking gas" price={100000}/>
      <Card image={image3} name="warmer" description="durable for warming" price={7000}/>
      <Card image={image4} name="bluetooth" description="durable for bluetooth" price={10000}/>
      <Card image={image5} name="light" description="durable for light" price={8000}/>
      </div>



  
     </div>

  )
}

export default App