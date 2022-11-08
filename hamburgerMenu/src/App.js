import {Route, Switch} from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="hamburger-menu-bg">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/not-found" component={NotFound} />
      <NotFound />
    </Switch>
  </div>
)

export default App
