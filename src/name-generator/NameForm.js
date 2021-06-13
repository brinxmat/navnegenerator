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
            <fieldset>
                <legend>Kustomisere ditt navn</legend>
                <fieldset>
                    <legend>Fornavn</legend>
                    <fieldset>
                        <legend>Velg kjønnet for ditt navn</legend>
                        <label className="App-inline-choice">Kvinne: <input type="radio" name='first.gender' value='F'
                                                                            checked={firstGender === 'F'}
                                                                            onChange={e => setFirstGender(e.target.value)}/></label>
                        <label className="App-inline-choice">Mann: <input type="radio" name='first.gender' value='M'
                                                                          checked={firstGender === 'M'}
                                                                          onChange={e => setFirstGender(e.target.value)}/></label>
                    </fieldset>
                    <label className="App-inline-choice">
                        Dobbelfornavn: <input type="checkbox" name="first.double" checked={firstDouble}
                                              onChange={e => setFirstDouble(e.target.checked)}/>
                    </label>
                </fieldset>
                <br/>
                <fieldset>
                    <legend>Etternavn</legend>
                    <label>Med etternavn</label> <input type="checkbox" name="last.double" checked={includeLast}
                                                        onChange={e => setIncludeLast(e.target.checked)}/>
                    <br/>
                    {includeLast && <div>
                        <label>Dobbeletternavn:</label>
                        <input type="checkbox" name="last.double" checked={lastDouble}
                                                onChange={e => setFirstLastDouble(e.target.checked)}/>
                    </div>}
                </fieldset>
                <input type="submit" value="Generér navn" onChange={e => handleSubmit(e)}/>
            </fieldset>
        </form>
  )
}

export default NameForm
