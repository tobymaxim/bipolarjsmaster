import React from "react"
import "../styles/index.css"

const Blogpost = ({ data }) => (
  <ul style={{ listStyle: "none" }}>{data.allWordpressPost.edges.map(post =>
    (
      <li className="post-li">
        <div className="blackbox">
          <h3 className="post-date">{post.node.date}</h3>
        </div>
        <div style={{ width: "100%" }} className="blog-post">
          <div className="content-container">
            <div className="blogpost-row">
              <div className="blogpost-column-1">
                {post.node.featured_media.localFile &&
                  <a href={post.node.featured_media.localFile.url}>
                    <img className="blog-images" src={post.node.featured_media.localFile.url} alt={post.node.featured_media.alt_text} />
                  </a>
                }
              </div>
              <div className="blogpost-column-2">
                <div>
                  <h2 className="post-title">{post.node.title}</h2>

                </div>
                <div className="post-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />
              </div>
            </div>

            <div className="soundcloud-container">
              {post.node.acf && post.node.acf.soundcloud_iframe &&
                <div className="soundcloud_iframe" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.soundcloud_iframe }} />}
            </div>
            {post.node.acf && post.node.acf.youtube_iframe &&
              <div className="youtube_iframe" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.youtube_iframe }} />}
            <div className="social-icons">
              {post.node.acf && post.node.acf.facebook &&
                <a className="sociallinks" href={post.node.acf && post.node.acf.facebook} target="_blank" rel="noopener noreferrer"><div className="facebook-icon"></div></a>}
              {post.node.acf && post.node.acf.resident_advisor &&
                <a className="sociallinks" href={post.node.acf && post.node.acf.resident_advisor} target="_blank" rel="noopener noreferrer"><div className="residentadvisor-icon"></div></a>}
              {post.node.acf && post.node.acf.link &&
                <a className="sociallinks" href={post.node.acf && post.node.acf.link} target="_blank" rel="noopener noreferrer"><div className="link-icon"></div></a>}
            </div>
            {post.node.acf && post.node.acf.credits &&
              <div className="post-credits" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.credits }} />}
            <div className="post-tag-container">
              {post.node.tags.map((tag) => <span className="post-tag">#{tag.name}</span>)}
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
)

export default Blogpost