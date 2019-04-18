import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Elements has over {data.elements.totalItems.approxCount} items</h1>
    <p>
      Really we do... there is exactly {data.elements.totalItems.count} items
    </p>
    <h3>Did you know we have some free files?</h3>
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "0 0 20px",
      }}
    >
      {data.elements.freeItems.items.map(({ slug, id, title, coverImage }) => (
        <li
          style={{
            flexBasis: "30%",
            listStyle: "none",
            margin: "0 0 20px",
            padding: 0,
          }}
        >
          <a
            style={{
              fontSize: "14px",
              lineHeight: "15px",
              color: "green",
            }}
            href={`http://elements.test/${slug}-${id}`}
          >
            <img
              alt={title}
              src={coverImage.w632}
              style={{ width: "300px", display: "inline-block", margin: 0 }}
            />
            <p>{title}</p>
          </a>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    elements {
      totalItems {
        count
        approxCount
      }
      freeItems {
        items {
          id
          title
          slug
          coverImage {
            w632
          }
        }
      }
    }
  }
`

export default IndexPage
