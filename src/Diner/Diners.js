import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import '../App.css';
import axios from 'axios'
import apiConfig from '../apiConfig'

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

const dinersList = data.businesses.map(diner => (
  <Col sm='4' key={diner.id}>
    <Card style={{ width: '18rem', margin: '0 auto', textAlign: 'center', fontSize: '20px', padding: '20px', borderColor: '#459342'}}>
      <Card.Body>
        <Card.Title style={{ fontSize: '25px' }}>{diner.name}</Card.Title>
      </Card.Body>
  </Card>
</Col>
))

return (
  <React.Fragment>
    <div style={{ textAlign: 'center' }}>
      <div className="diner-search" styles={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>Search For Diners Below</h1>
          <input style={{ margin: '0 auto', textAlign: 'center'}}
            type="text"
            className="search-input"
            placeholder="Include city and state...ex Boston MA"
            onChange={event => setInput(event.target.value)}
            value={input}/>
            <button type="submit" onClick={() => getData(input)}>Search!</button>
        </div>
    </div>

      <Row>
          {dinersList}
      </Row>

    </React.Fragment>
  )
}

export default Diners
