import React from 'react'
import Moment from 'react-moment';

function Info(props) {
  return (
    <div className="info-container">
      <h1 className="info-title">{props.country}</h1>
      <table className="info-table">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="info">Cases:</td>
            <td className="info info-data">{props.infected}</td>
          </tr>
          <tr>
            <td className="info">Deaths:</td>
            <td className="info">{props.deaths}</td>
          </tr>
          <tr>
            <td className="info">Recoveries:</td>
            <td className="info">{props.recoveries}</td>
          </tr>
          <tr>
            <td className="info">Updated:</td>
            <td className="info"><Moment format="MM/DD/YYYY">{props.updated}</Moment></td>
          </tr>
          <tr>
            <td><p className="api-link"><a className="api" href="https://rapidapi.com/slotixsro-slotixsro-default/api/covid-19-tracking/endpoints" target="_blank" rel="noreferrer">API</a> </p></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Info