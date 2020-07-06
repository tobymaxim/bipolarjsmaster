import React from "react"
import "../styles/index.css"
import "../styles/imagegallery.css";

const Imagegallery = ({ data }) => (
  <div>
    <div className="blackbox-imagegallery">
      <h1 className="headline1-artist">asdPresspics</h1>
    </div>

    <ul className="imagegallery-ul" style={{ listStyle: "none" }}>{data.allWordpressPage.edges.map(post =>
      (
        <div>
          {post.node.acf.image_1.localFile && post.node.acf.image_1.localFile.url &&
            <li className="imagegallery-li"><a href={post.node.acf.image_1.localFile.url} target="_blank"><img className="artist-imagegallery" src={post.node.acf.image_1.localFile.url} /></a></li>}
          {post.node.acf.image_2.localFile && post.node.acf.image_2.localFile.url &&
            <li className="imagegallery-li"><a href={post.node.acf.image_2.localFile.url} target="_blank"><img className="artist-imagegallery" src={post.node.acf.image_2.localFile.url} /></a></li>}
        </div>

      ))}
    </ul>

  </div>
)

export default Imagegallery