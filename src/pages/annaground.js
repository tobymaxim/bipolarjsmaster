import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"
import RegistrationDesktop from "../components/RegistrationDesktop"

const AnnagroundPage = ({ data }) => (

  <Layout data={data}>
    <SEO title="Anna Ground" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container">
      <div className="left-container">
        <div className="blackbox"><h1 className="headline1">Anna Ground</h1></div>
        <div className="artist-blog-post">
          <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>
              <div className="artists-container">
                <div className="artists-container-left">
                       {post.node.featured_media && post.node.featured_media.localFile &&
                    <a href={post.node.featured_media.localFile.url}target="_blank" rel="noopener noreferrer">
                      <img className="artists-images" src={post.node.featured_media.localFile.url} alt={post.node.featured_media.alt_text} />
                    </a>
                  }
                  <div className="artists-sociallinks-container">
                    {post.node.acf && post.node.acf.resident_advisor &&
                      <a className="artists-sociallinks" href={post.node.acf && post.node.acf.resident_advisor} target="_blank" rel="noopener noreferrer"><div className="residentadvisor-icon"></div></a>}
                    {post.node.acf && post.node.acf.soundcloud &&
                      <a className="artists-sociallinks" href={post.node.acf && post.node.acf.soundcloud} target="_blank" rel="noopener noreferrer"><div className="soundcloud-icon"></div></a>}
                    {post.node.acf && post.node.acf.facebook &&
                      <a className="artists-sociallinks" href={post.node.acf && post.node.acf.facebook} target="_blank" rel="noopener noreferrer"><div className="facebook-icon"></div></a>}
                    {post.node.acf && post.node.acf.instagram &&
                      <a className="artists-sociallinks" href={post.node.acf && post.node.acf.instagram} target="_blank" rel="noopener noreferrer"><div className="instagram-icon"></div></a>}
                  </div>
                  {post.node.acf && post.node.acf.presskit &&
                    <a className="button-presskit" href={post.node.acf && post.node.acf.presskit} target="_blank" rel="noopener noreferrer"><div className="button-general">Download Presskit</div></a>}
                  {post.node.acf && post.node.acf.credits &&
                    <div className="artist-credits" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.credits }} />}
                </div>
                <div className="artists-container-right">
                  <div className="artists-post-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />
                  <div className="artist-tag-container">
                    {post.node.acf && post.node.acf.tag_1 &&
                      <div className="post-tag">#{post.node.acf.tag_1}</div>}
                    {post.node.acf && post.node.acf.tag_2 &&
                      <div className="post-tag">#{post.node.acf.tag_2}</div>}
                    {post.node.acf && post.node.acf.tag_3 &&
                      <div className="post-tag">#{post.node.acf.tag_3}</div>}
                    {post.node.acf && post.node.acf.tag_4 &&
                      <div className="post-tag">#{post.node.acf.tag_4}</div>}
                  </div>
                  {post.node.acf && post.node.acf.credits &&
                    <div className="artist-credits-mobile" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.credits }} />}
                </div>
              </div>
            </div>
          )}
          </div>
        </div>

        <div className="blackbox"><h1 className="headline1">Music</h1></div>
        <div className="artist-blog-post">
          <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>
              <div className="artists-soundcloud-container">
                {post.node.acf && post.node.acf.soundcloud_iframe &&
                  <div className="artists-soundcloud-iframe" dangerouslySetInnerHTML={{ __html: post.node.acf && post.node.acf.soundcloud_iframe }} />}
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
      <div className="right-container">
      <RegistrationDesktop />
        <div className="blackbox">
          <h1 className="headline1">Next Dates</h1>
        </div>
        <Nextdates data={data} />
        <Sociallinks data={data} />
      </div>
    </div>
  </Layout>
)

export default AnnagroundPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-artists.php"}, title: {eq: "AnnaGround"}}) {
      edges {
        node {
          featured_media {
            localFile {
              url
              childImageSharp {
                resolutions(height: 530, width: 530) {
                  src
                }
              }
            }
          }
          acf {
            credits
            tag_1
            tag_2
            tag_3
            tag_4
            resident_advisor
            soundcloud
            facebook
            instagram
            booking
            presskit
            bandcamp_iframe
            youtube_iframe
            soundcloud_iframe
          }
          content
        }
      }
    }
    allTribeEvents(sort: {order: ASC, fields: start_date}, filter: {categories: {elemMatch: {name: {eq: "Anna Ground"}}}}) {
        edges {
          node {
            title
            description
            cost_details {
              currency_symbol
            }
            categories {
              name
            }
            website
            venue {
              venue
              website
              city
              country
            }
            start_date(formatString: "MMM")
            date(formatString: "MMM")
            start_date_details {
              day
            }
          }
        }
      }
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          slug
          items {
            title
            wordpress_children {
              title
            }
          }
        }
      }
    }
  }    
`