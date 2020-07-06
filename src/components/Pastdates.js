import React from "react"
import "../styles/index.css"

const Nextdates = ({ data }) => (
  <div className="blog-post">
    <div>{data.allTribeEvents.edges.map(post =>
      (
        <div className="date-query">
          <div className="blackbox">
            <h3 className="dates-date">{post.node.start_date}</h3>
          </div>
          <p className="dates-content"><strong>{post.node.title}</strong> in {post.node.venue.city} at <strong><a className="dates-venue-link" href={post.node.venue.website}>{post.node.venue.venue}</a></strong></p>
        </div>

      ))}</div>

  </div>

)

export default Nextdates

