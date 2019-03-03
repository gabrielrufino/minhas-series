import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './views/Home'
import Series from './views/Series'
import NewSeries from './views/NewSeries'
import EditSerie from './views/EditSeries'
import About from './views/About'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />

          <Route path='/' exact component={ Home } />
          <Route path='/series/:genre' exact component={ Series } />
          <Route path='/series/edit/:id' component={ EditSerie } />
          <Route path='/new' exact component={ NewSeries } />
          <Route path='/about' exact component={ About } />
        </div>
      </Router>
    )
  }
}

export default App
