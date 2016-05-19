import React, { Component } from 'react'
import ContentList from '../ContentList'

import AddCreative from '../../containers/AddContent.jsx'
import CreativeList from '../../containers/ListCreative.jsx'

const Creative = () => (

  <div className="view-wrap">
    <div className="side-nav-wrapper">
        <div className="side-nav">

        </div>
    </div>

    <div className="view-content">
      <div className="view-header">
        <h2>All Creative</h2>
        <em className="note">Add your creative below. Click on Featured to select the 5 pieces you’d like to include in your home page viewer.</em>

        <AddCreative type="creative" />

      </div>

      <CreativeList type="creative" />

    </div>
  </div>

)

export default Creative

// export default class Creative extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       selector: 0,
//       creatives: [
//         {
//           AgencyId: 13851,
//           ClientId: 56912,
//           CoverImage: 0,
//           CreativeType: "18",
//           EmbeddableMedia: "https://vimeo.com/115809376",
//           Id: 56913,
//           IsPrivate: false,
//           PublishedDate: "5:24PM 1/2/2015",
//           RemoteImage: null,
//           ShortDescription: "",
//           Title: "Naked"
//         },
//         {
//           AgencyId: 2986,
//           ClientId: 3039,
//           CoverImage: 0,
//           CreativeType: "23",
//           EmbeddableMedia: "https://youtu.be/9Pp7NkyYlMc",
//           Id: 51934,
//           IsPrivate: false,
//           PublishedDate: "7:03PM 12/2/2014",
//           RemoteImage: "https://i.ytimg.com/vi/9Pp7NkyYlMc/hqdefault.jpg",
//           ShortDescription: "Stock video used for Agency ComPile demo profile",
//           Title: "VideoSample"
//         }
//         // { id: 1, title: 'First Creative', description: 'Short Description', clientId: 1, creativeType: 'Digital', coverImage: '/images/stock/1.jpg' },
//         // { id: 2, title: 'Sushi', description: 'Raw Fish', clientId: 2, creativeType: 'Food', coverImage: '/images/stock/2.jpg' }
//       ]
//     }
//   }
//   selectContent(e) {
//
//   }
//   render() {
//     return (
//       <div className="view-wrap">
//         <div className="side-nav-wrapper">
//             <div className="side-nav">
//
//             </div>
//         </div>
//
//         <div className="view-content">
//           <div className="view-header">
//             <h2>All Creative</h2>
//             <em className="note">Add your creative below. Click on Featured to select the 5 pieces you’d like to include in your home page viewer.</em>
//
//             <AddCreative />
//           </div>
//
//           <CreativeList />
//
//
//         </div>
//       </div>
//     )
//   }
// }
