import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Series from './Series'
import NewSeries from './NewSeries'
import About from './About'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <Link className="navbar-brand page-scroll" to="/">
                  <img src="images/logo.png" height="30" alt=""/>
                </Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/new">Nova série</Link>
                  </li>
                  <li>
                    <Link to="/about">Sobre</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Route path="/" exact component={Home}/>
          <Route path="/series/:genre" component={Series}/>
          <Route path="/new" exact component={NewSeries}/>
          <Route path="/about" exact component={About}/>
        </div>
      </Router>
    )
  }
}

export default App
