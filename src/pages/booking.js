import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"
import RegistrationDesktop from "../components/RegistrationDesktop"


const BookingPage = ({ data }) => (

    <Layout data={data}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="main-container">
            <div className="left-container">
                <div className="blackbox"><h1 className="headline1">Booking Request</h1></div>
                <div className="blog-post">
                    <div class="form-iframe-container">
                      <p className="contact-text">Use the contact form or send us an email: <a href="mailto:info@bipolar.berlin"><strong>info@bipolar.berlin</strong></a></p>
                      <hr />
                    <iframe src="http://54499171.swh.strato-hosting.eu/bipolarjs/contact-form/" name="iframe" id="iframe" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="422" width="100%" onload="setIframeHeight();"></iframe>
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

export default BookingPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-artists.php"}}, sort: {fields: guid}) {
      edges {
        node {
          featured_media {
            localFile {
              childImageSharp {
                resolutions(height: 530, width: 530) {
                  src
                }
              }
            }
          }
          title
        }
      }
    }
    allTribeEvents(sort: {order: ASC, fields: start_date}) {
      edges {
        node {
          title
          description
          cost_details {
            currency_symbol
          }
          categories {
            name
            description
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
    allInstaNode {
      edges {
        node {
          localFile {
            childImageSharp {
              resolutions(height: 580, width: 580, fit: COVER, cropFocus: CENTER) {
                src
              }
            }
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