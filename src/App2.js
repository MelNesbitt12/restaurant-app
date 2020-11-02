import React, { Link } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Diners from '../src/Diner/Diners'
// import Diner from '../src/Diner/Diner'
// import '../src/App.css'

class App2 extends React.Component {
  render (){
    return (
      <Router>
        <main>
            <Route exact path='/restaurant-app' component={Diners} />
          {/*  <Route exact path='/restaurant-app/:id' render={({ match }) => (
              <Diner />
            )} /> */}
        </main>
      </Router>
    )
  }
}


export default App2
