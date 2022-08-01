import React, { useState, useEffect } from 'react'
import StateInfo from './StateInfo'
import API from '../utils/API'

function Search() {

  const [covidInfo, setCovidInfo] = useState("")

  useEffect(() => {
    loadData("co")
  }, [])

  function loadData(state) {
    API.getCovidData(state)
      .then((response) => {
        const data = response.data
        console.log(data);
        setCovidInfo(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }


  return (
    <div className="container-fluid search-container">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Select State</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li className="dropdown-item" onClick={() => loadData('AL')} value="AL">AL</li>
          <li className="dropdown-item" onClick={() => loadData('AK')} value="AK">AK</li>
          <li className="dropdown-item" onClick={() => loadData('AZ')} value="AZ">AZ</li>
          <li className="dropdown-item" onClick={() => loadData('AR')} value="AR">AR</li>
          <li className="dropdown-item" onClick={() => loadData('CA')} value="CA">CA</li>
          <li className="dropdown-item" onClick={() => loadData('CO')} value="CO">CO</li>
          <li className="dropdown-item" onClick={() => loadData('CT')} value="CT">CT</li>
          <li className="dropdown-item" onClick={() => loadData('FL')} value="FL">FL</li>
          <li className="dropdown-item" onClick={() => loadData('GA')} value="GA">GA</li>
          <li className="dropdown-item" onClick={() => loadData('HI')} value="HI">HI</li>
          <li className="dropdown-item" onClick={() => loadData('ID')} value="ID">ID</li>
          <li className="dropdown-item" onClick={() => loadData('IL')} value="IL">IL</li>
          <li className="dropdown-item" onClick={() => loadData('IN')} value="IN">IN</li>
          <li className="dropdown-item" onClick={() => loadData('IA')} value="IA">IA</li>
          <li className="dropdown-item" onClick={() => loadData('KS')} value="KS">KS</li>
          <li className="dropdown-item" onClick={() => loadData('KY')} value="KY">KY</li>
          <li className="dropdown-item" onClick={() => loadData('LA')} value="LA">LA</li>
          <li className="dropdown-item" onClick={() => loadData('ME')} value="ME">ME</li>
          <li className="dropdown-item" onClick={() => loadData('MD')} value="MD">MD</li>
          <li className="dropdown-item" onClick={() => loadData('MA')} value="MA">MA</li>
          <li className="dropdown-item" onClick={() => loadData('MI')} value="MI">MI</li>
          <li className="dropdown-item" onClick={() => loadData('MN')} value="MN">MN</li>
          <li className="dropdown-item" onClick={() => loadData('MS')} value="MS">MS</li>
          <li className="dropdown-item" onClick={() => loadData('MO')} value="MO">MO</li>
          <li className="dropdown-item" onClick={() => loadData('MT')} value="MT">MT</li>
          <li className="dropdown-item" onClick={() => loadData('NE')} value="NE">NE</li>
          <li className="dropdown-item" onClick={() => loadData('NV')} value="NV">NV</li>
          <li className="dropdown-item" onClick={() => loadData('NH')} value="NH">NH</li>
          <li className="dropdown-item" onClick={() => loadData('NJ')} value="NJ">NJ</li>
          <li className="dropdown-item" onClick={() => loadData('NM')} value="NM">NM</li>
          <li className="dropdown-item" onClick={() => loadData('NY')} value="NY">NY</li>
          <li className="dropdown-item" onClick={() => loadData('NC')} value="NC">NC</li>
          <li className="dropdown-item" onClick={() => loadData('ND')} value="ND">ND</li>
          <li className="dropdown-item" onClick={() => loadData('OH')} value="OH">OH</li>
          <li className="dropdown-item" onClick={() => loadData('OK')} value="OK">OK</li>
          <li className="dropdown-item" onClick={() => loadData('OR')} value="OR">OR</li>
          <li className="dropdown-item" onClick={() => loadData('PA')} value="PA">PA</li>
          <li className="dropdown-item" onClick={() => loadData('AZ')} value="AZ">AZ</li>
          <li className="dropdown-item" onClick={() => loadData('RI')} value="RI">RI</li>
          <li className="dropdown-item" onClick={() => loadData('SC')} value="SC">SC</li>
          <li className="dropdown-item" onClick={() => loadData('SD')} value="SD">SD</li>
          <li className="dropdown-item" onClick={() => loadData('TN')} value="TN">TN</li>
          <li className="dropdown-item" onClick={() => loadData('TX')} value="TX">TX</li>
          <li className="dropdown-item" onClick={() => loadData('UT')} value="UT">UT</li>
          <li className="dropdown-item" onClick={() => loadData('VT')} value="VT">VT</li>
          <li className="dropdown-item" onClick={() => loadData('VA')} value="VA">VA</li>
          <li className="dropdown-item" onClick={() => loadData('WA')} value="WA">WA</li>
          <li className="dropdown-item" onClick={() => loadData('WV')} value="WV">WV</li>
          <li className="dropdown-item" onClick={() => loadData('WI')} value="WI">WI</li>
          <li className="dropdown-item" onClick={() => loadData('WY')} value="WY">WY</li>
        </ul>
      </div>
      <div className="city-info-container">
        <StateInfo
          state={covidInfo.state}
          positive={covidInfo.positive}
          death={covidInfo.death}
          recovered={covidInfo.recovered}
          updated={covidInfo.lastUpdateEt}
          se // value={selectState}
        />
      </div>
    </div>
  )
}

export default Search