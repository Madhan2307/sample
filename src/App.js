import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './Card'
import Enter from './Enter'
import Home from './Home'
import Signp from './Signp'
import Logp from './Logp'
import Lpage1 from './Lpage1'
import Allproduct from './Allproduct'
import Api from './Api'
import Product from './Product'


export class app extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            {/* <Route path='/' element={<Home />} />
            <Route path='/enterpage' element={<Enter />} />
            <Route path='/cardpage' element={<Card />} /> */}
            {/* <Route path='/' element={<Signp/>}/>
            <Route path='/loginpage' element={<Logp />}/>
            <Route path='/loginpage1' element={<Lpage1/>}/> */}
            <Route path='/' element={<Allproduct/>}></Route>
            <Route path='/api' element={<Api/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default app
