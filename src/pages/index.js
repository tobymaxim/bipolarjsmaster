import { graphql } from "gatsby"
import React from "react"
import Blogpost from "../components/blogpost"
import Instagram from "../components/Instagram"
import Layout from "../components/layout"
import Nextdates from "../components/Nextdates"
import RegistrationDesktop from "../components/RegistrationDesktop"
import RegistrationMobile from "../components/RegistrationMobile"
import SEO from "../components/seo"
import Sociallinks from "../components/Sociallinks"
import "../styles/index.css"

const IndexPage = ({ data }) => (
  
  <Layout data={data}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="v-header container">
      <div className="fullscreen-video-wrap">
        <video muted className="video-wraper" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/07/-DMT_visuals.mp4" autoplay="true" loop="true" ></video>
      </div>
      <div className="header-overlay"></div>
      <div class="header-content">
        <img className="cover-logo" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/07/bplr-logo.svg"></img>

        <div class="scroll-down"><div class="chevron"></div><div class="chevron"></div><div class="chevron"></div><span class="scroll-down-text">Scroll down</span></div>

        <h1 className="h1-intro">BIPØLAR.</h1>
        <p className="introtext">Lorem ipsum dolor, sit amet consecuter asdogier elit. Inveotre temora tempore voluptate, aliqjer djsdir sdksd gjdgjdf fdaf. </p>
      </div>
    </div>
   
    <div className="main-container">
      
      <div className="video-teaser">



      </div>
      <div className="left-container">
        <RegistrationMobile />
        <div className="blackbox"><h1 className="headline1">News</h1></div>
        <Blogpost data={data} />
      </div>
      <div className="right-container">
        <RegistrationDesktop />
        <div className="blackbox">
          <h1 className="headline1">Next Dates</h1>
        </div>
        <Nextdates data={data} />
        <Sociallinks data={data} />
        <div className="instagram-main-container">
          <div className="blackbox">
            <h1 className="headline1">Instagram</h1>
          </div>
          <div className="instagram-container"><Instagram data={data} /></div>
        </div>
      </div>
    </div>
  </Layout>
)
export default IndexPage
export const query = graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Posts"}}}}, sort: {fields: [date], order: DESC}) {
      edges {
        node {
          title
          slug
          content
          author {
            name
          }
          date(formatString: "LLLL")
          tags {
            name
          }
          categories {
            name
          }
          acf {
            credits
            resident_advisor
            soundcloud_iframe
            youtube_iframe
            facebook
            link
          }
          featured_media{
            localFile{
              url
              childImageSharp{
                resolutions(height: 530, width: 530) {
                  src
                }
              }
            }
          alt_text
        }
        }
      }
    }
    allTribeEvents(sort: {order: ASC, fields: start_date}) {
      edges {
        node {
          description
          cost_details {
            currency_symbol
          }
          title
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
    allInstaNode(sort: {fields: timestamp, order: DESC}) {
      edges {
        node {
          localFile {
            url
            name
            childImageSharp {
              resolutions(cropFocus: CENTER) {
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