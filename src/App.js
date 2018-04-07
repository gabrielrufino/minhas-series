import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Series from './Series'
import NewSeries from './NewSeries'
import EditSerie from './EditSeries'
import About from './About'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <div className="container">
              <Link className="navbar-brand page-scroll" to="/">
                <img src="/images/logo.png" height="30" alt=""/>
              </Link>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/new">Nova série</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">Sobre</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Route path="/" exact component={ Home } />
          <Route path="/series/:genre" exact component={ Series } />
          <Route path='/series/edit/:id' component={ EditSerie } />
          <Route path="/new" exact component={ NewSeries } />
          <Route path="/about" exact component={ About } />
        </div>
      </Router>
    )
  }
}

export default App
