import './App.css'
import NameGenerator from './name-generator/NameGenerator.mjs'
import React from 'react'
import NameForm from './name-generator/NameForm'
import Name from './name-generator/Name.mjs'
import AppProptypes from './AppProptypes'

function GetName ({ name }) {
  const last = (name.includeLast) ? new Name('last', null, name.lastDouble) : null
  const first = new Name('first', name.firstGender, name.firstDouble)
  const generated = new NameGenerator(first, last).name
  return (
        <div className="App-name">
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
          <span className="App-title">SoMeStar Insta-navnegenerator</span>
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
