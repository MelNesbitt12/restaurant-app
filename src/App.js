import React, { useState } from 'react';
// import logo from './logo.svg';
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import axios from 'axios'
import apiConfig from './apiConfig'
// import search from './Search/Search'
// import Diners from './Diner/Diners'

function Diners () {
  const [data, setData] = useState({ businesses: [] })
  const [input, setInput] = useState('')

  const getData = async () => {
    const result = await axios({
      url: (`https://cors-anywhere.herokuapp.com/${apiConfig.base}/businesses/search?location=${input}`),
        headers: {
          'Authorization': `Bearer ${apiConfig.key}`
        },
        params: {
          categories: 'diners'
        }
      })
        .then((res) => {
          setData(res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.error ('error')
         })
    }

return (
  <React.Fragment>
    <div>
      <div className="diner-search">
        <h1>Search For Diners Below</h1>
        <input
            type="text"
            className="search-input"
            placeholder="Include city and state...ex Boston MA"
            onChange={event => setInput(event.target.value)}
            value={input}/>
            <button type="submit" onClick={() => getData(input)}>Search!</button>
        </div>
    <ul>
      {data.businesses.map(diner =>
        <li key={diner.id}>{diner.name}</li>
      )}
    </ul>
    </div>
    </React.Fragment>
  )
}

export default Diners
