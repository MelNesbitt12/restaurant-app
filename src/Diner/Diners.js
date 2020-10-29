import React, { useState } from 'react'
import api from '../apiConfig'
import axios from 'axios'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'

// Create a function to take in the props (user location) and make an API call to get the closest 10 diners

// class Diners extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             businesses:[]
//     } 
//     console.log(props)       
// }

// componentDidMount () {
//     // make a GET request for all of the user's renewals
//     axios({
//       url: `{api.base}/businesses/search?term=diner&location={props.query}`,
//       headers: {
//         'Authorization': `Bearer Token token={api.key}`
//       }
//     })
//         .then((res) => {
//             this.setState({ businesses: res.data.businesses })
                
//             if(res.data.businesses.length === 0 ){
//                 alert('No diners in your area 😱')
//             }
//          })
//         .catch(error => {
//             console.error(error)
//         })
//     }

function Diners ( props ) {
    const [businesses, setBusinesses] = useState([])
    const search = ((event) => {
        axios({
            url: `{api.base}/businesses/search?term=diner&location={props.query}`,
            headers: {
            'Authorization': `Bearer Token token={api.key}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBusinesses(data)
            })             
            .catch(error => {
                console.error(error)
            })  
    })

// }

    // render () {
    //     const businesses = this.state.businesses.map(business => {
    //     return (
    //         <div key={business.id}>
    //             <p>{business.name}</p>
    //             <p>{business.rating}</p>
    //             <p>{business.cost}</p>
    //             <p>{business.location}</p>
    //         </div>
    //     )
    // })
        return (
         <CardDeck className="diners scroll">
             <h1 className="diner-title" style={{ fontWeight: 'bold', textAlign: 'center', textShadow: '1px 1px', margin: 'auto' }}>Diners</h1>
            <Row>
                {businesses}
            </Row>
        </CardDeck>
        )
    // }  
}

export default Diners 