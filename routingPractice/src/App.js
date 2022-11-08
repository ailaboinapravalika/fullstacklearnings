import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import Header from './components/Header'

import Home from './components/Home'

import About from './components/About'

import Contact from './components/Contact'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-page">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
