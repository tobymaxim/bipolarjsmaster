import React from "react"
import "../styles/index.css"

const Nextdates = ({ data }) => (
  <div className="dates-post">

    <div className="dates-container">{data.allTribeEvents.edges.map(post =>
      (
        < div className="content-container" >
          <div className="dates-row">
            <div className="dates-column-1">
              <div className="dates-border">
                <h3 className="dates-date">{post.node.start_date_details.day}</h3>
                <h3 className="dates-date2">{post.node.start_date}</h3>
              </div>
            </div>
            <div className="dates-column-2">
              <div className="dates-content-container">
                <div className="venue-container"><a className="dates-venue-link" href={post.node.venue.website}>{post.node.venue.venue}</a></div>
                <div><a className="dates-artist-link" href={post.node.website}>{post.node.title}</a> | {post.node.venue.city}</div>
                <div dangerouslySetInnerHTML={{ __html: post.node.description }} />
              </div>
            </div>
          </div>
          <hr className="dates-hr" />
        </div>


      ))}</div>

  </div>

)

export default Nextdates

