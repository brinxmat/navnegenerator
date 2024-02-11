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
      firstGender,
      firstDouble,
      lastDouble,
      includeLast
    })
  }

  NameForm.propTypes = AppProptypes

  return (
        <form onSubmit={handleSubmit} className="App-settings">
            <fieldset>
                <legend>Kustomisér ditt navn</legend>
                <fieldset>
                    <legend>Fornavn</legend>
                    <fieldset>
                        <legend>Velg kjønn for ditt navn</legend>
                        <label className="App-inline-choice">Kvinne: <input type="radio" data-testid="radio-f"
                                                                            name='first.gender' value='F'
                                                                            checked={firstGender === 'F'}
                                                                            onChange={e => setFirstGender(e.target.value)}/></label>
                        <label className="App-inline-choice">Mann: <input type="radio" name='first.gender' value='M'
                                                                          data-testid="radio-m"
                                                                          checked={firstGender === 'M'}
                                                                          onChange={e => setFirstGender(e.target.value)}/></label>
                    </fieldset>
                    <label className="App-inline-choice">
                        Dobbelfornavn: <input type="checkbox" data-testid="first-double" name="first.double"
                                              checked={firstDouble} onChange={e => setFirstDouble(e.target.checked)}/>
                    </label>
                </fieldset>
                <br/>
                <fieldset>
                    <legend>Etternavn</legend>
                    <label>Med etternavn<input type="checkbox" data-testid="include-last" name="include.last"
                                               checked={includeLast} onChange={e => setIncludeLast(e.target.checked)}/>
                    </label>
                    <br/>
                    {includeLast &&
                        <label>Dobbeletternavn:
                            <input type="checkbox" data-testid="last-double" name="last.double" checked={lastDouble}
                                   onChange={e => setFirstLastDouble(e.target.checked)}/>
                        </label>}
                </fieldset>
                <input type="submit" data-testid="submit-button" value="Generér navn" />
            </fieldset>
        </form>
  )
}

export default NameForm
