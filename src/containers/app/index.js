import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/about" component={About} />
      <Route path="*" component={Home} />
    </main>
  </div>
)

export default App
