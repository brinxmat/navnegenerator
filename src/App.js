import './App.css'
import NameGenerator from './name-generator/NameGenerator.js'
import React from 'react'
import NameForm from './name-generator/NameForm'
import Name from './name-generator/Name.js'
import AppProptypes from './AppProptypes'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-199572902-1', { testMode: process.env.NODE_ENV === 'test' })
ReactGA.pageview(window.location.pathname + window.location.search)

function GetName ({ name }) {
  const last = (name.includeLast) ? new Name('last', null, name.lastDouble) : null
  const first = new Name('first', name.firstGender, name.firstDouble)
  const generated = new NameGenerator(first, last).name
  return (
        <div className="App-name" data-testid="generated-name">
            {generated}
        </div>
  )
}

GetName.propTypes = AppProptypes

function App () {
  const [name, setName] = React.useState({
    firstGender: 'F',
    firstDouble: false,
    lastDouble: false,
    includeLast: false
  })

  function addName (name) {
    setName(name)
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-title">Annjo sin Insta-navnegenerator</h1>
      </header>
      <section>
          <GetName name={name} />
      </section>
      <section className="App-settings">
          <div>
              <NameForm name={name} addName={addName}/>
          </div>
      </section>
    </div>
  )
}

export default App
