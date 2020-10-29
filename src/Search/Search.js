// import React, { useEffect } from 'react'
// import apiConfig from '../apiConfig'
// import axios from 'axios'

// const search = ( props ) => {
//     useEffect(() => {
//         axios({
//             url: `{apiConfig.base}/businesses/search?term=diner&location={props.userQuery}`,
//             headers: {
//                 'Authorization': `Bearer Token token={apiConfig.key}`
//             }
//         })
//             .then(res => res.json())
//             .catch(error => {
//                 console.error(error)
//             })
//         })
    
//     return (
//         <div className="search">
//             <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Type Your Location (city and state)"
//                 onChange={event => setState({ userQuery: event.target.value })}
//             />
//         </div>
//     )
// }


// export default search 