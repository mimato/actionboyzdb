import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data: { list } }) => (
  <Layout>
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {list.nodes[0].items.map((movie, index) => (
            <tr key={index}>
              <td><img src={movie.poster_path.childImageSharp.fixed.src} alt="Movie poster"/></td>
              <td>{movie.title}</td>
              <td>{movie.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    list: allTmdbAccountLists(filter: {name: {eq: "Action Boyz Movies"}}) {
      nodes {
        item_count
        name
        items {
          id
          title
          original_title
          overview
          release_date(formatString: "YYYY-MM-DD")
          poster_path {
            childImageSharp {
              fixed(height:100, quality:90){
                src
              }
            }
          }
        }
      }
    }
  }
`
