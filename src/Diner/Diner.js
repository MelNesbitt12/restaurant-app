import React, { useState, useEffect, Fragment } from 'react'
import api from '../apiConfig'
import axios from 'axios'

// Component to get individual diner info from api and display it in bootstap card
// useState returns a variable for the current state & a function to set the diner state
const Diner = (props) => {
  const [diner, setDiner] = useState({})
//     'id': props.match.params.id,
//     'name': '',
//     'url': '',
//     'display_phone': '',
//     'rating': 0,
//     'location': {
//       'address1':'',
//       'address2':'',
//       'address3':'',
//       'city': '',
//       'state': '',
//       'zip_code':''
//     },
//     'price': 0,
//     'hours': [
//       {
//       'open': [
//         {
//           "is_overnight": false,
//           "start": '',
//           "end": '',
//           "day": 0
//         },
//         {
//           "is_overnight": false,
//           "start": '',
//           "end": '',
//           "day": 1
//         },
//         {
//           "is_overnight": false,
//           "start": '',
//           "end": '',
//           "day": 2
//         },
//         {
//           "is_overnight": false,
//           "start": '',
//           "end": '',
//           "day": 3
//         },
//         {
//           "is_overnight": false,
//           "start": '',
//           "end": '',
//           "day": 4
//         },
//         {
//           "is_overnight": false,
//           "start": '',
//           "end": '',
//           "day": 5
//         },
//         {
//           "is_overnight": false,
//           "start": '',
//           "end": '',
//           "day": 6
//         }
//       ],
//       "hours_type": '',
//       "is_open_now": false
//     }
//     ]
//   })
//   console.log('setDiner is ' + setDiner)
//   console.log('diner is ' + diner)
// }

useEffect(() => {
       axios({
           url:`https://cors-anywhere.herokuapp.com/${api.base}/businesses/${props.match.params.id}`,
           headers: {
               'Authorization': `Bearer ${api.key}`
           }
       })
           .then(res => setDiner(res.data.diner))
           .catch(console.error)
   })
/* const getDiner = async () => {
  const result = await axios({
    url: (`https://cors-anywhere.herokuapp.com/${apiConfig.base}/businesses/${id}`),
      headers: {
        'Authorization': `Bearer ${apiConfig.key}`
      },
    })
      .then((res) => {
        setData(res.data.diner)
        console.log(res.data.diner)
      })
      .catch((err) => {
        console.error ('error')
       })
  }
*/

return (
  <Fragment>
    <div key={diner.id}/>
      <h3>{diner.name}</h3>
      <h3>{diner.url}</h3>
      <h3>{diner.phone}</h3>
  </Fragment>
  )
}

export default Diner
