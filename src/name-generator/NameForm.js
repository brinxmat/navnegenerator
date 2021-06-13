import React from 'react'
import AppProptypes from '../AppProptypes'

function NameForm ({ name, addName }) {
  const [firstGender, setFirstGender] = React.useState(name.firstGender)
  const [firstDouble, setFirstDouble] = React.useState(name.firstDouble)
  const [lastDouble, setFirstLastDouble] = React.useState(name.lastDouble)
  const [includeLast, setIncludeLast] = React.useState(name.includeLast)

  const handleSubmit = (event) => {
    event.preventDefault()
    addName({
      firstGender: firstGender,
      firstDouble: firstDouble,
      lastDouble: lastDouble,
      includeLast: includeLast
    })
  }

  NameForm.propTypes = AppProptypes

  return (
        <form onSubmit={handleSubmit} className="App-form">
            <div>
                <header className="App-settings-header">Fornavn</header>
            <div>
                <label className="App-inline-choice">Kvinne: <input type="radio" name='first.gender' value='F' checked={firstGender === 'F'}
                                      onChange={e => setFirstGender(e.target.value)}/></label>
                <label className="App-inline-choice">Mann: <input type="radio" name='first.gender' value='M' checked={firstGender === 'M'}
                                    onChange={e => setFirstGender(e.target.value)}/></label>
            </div>
            <label className="App-inline-choice">
                Dobbelfornavn: <input type="checkbox" name="first.double" checked={firstDouble}
                                      onChange={e => setFirstDouble(e.target.checked)}/>
            </label>
            </div>
            <br/>
            <label className="App-settings-header">
                Etternavn <input type="checkbox" name="last.double" checked={includeLast}
                                     onChange={e => setIncludeLast(e.target.checked)}/>
            </label>
            <br/>
            {includeLast && <label>
                Dobbeletternavn: <input type="checkbox" name="last.double" checked={lastDouble}
                                        onChange={e => setFirstLastDouble(e.target.checked)}/>
            </label>}
            <br/>
            <input type="submit" value="Generér navn" onChange={e => handleSubmit(e)}/>
        </form>
  )
}

export default NameForm
