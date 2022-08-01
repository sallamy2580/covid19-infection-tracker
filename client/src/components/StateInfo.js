import React from 'react'
import Moment from 'react-moment';

function StateInfo(props) {
  return (
    <div className="state-info">
      <table className="state-table">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="info">State:</td>
            <td className="info">{props.state}</td>
          </tr>
          <tr>
            <td className="info">Cases:</td>
            <td className="info">{props.positive}</td>
          </tr>
          <tr>
            <td className="info">Deaths:</td>
            <td className="info">{props.death}</td>
          </tr>
          <tr>
            <td className="info">Recoveries:</td>
            <td className="info">{props.recovered}</td>
          </tr>
          <tr>
            <td className="info">Updated:</td>
            <td className="info"><Moment format="MM/DD/YYYY">{props.updated}</Moment></td>
          </tr>
          <tr>
            <td><p className="api-link"><a className="api" href="https://covidtracking.com/data/api" target="_blank" rel="noreferrer">API</a> </p></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StateInfo